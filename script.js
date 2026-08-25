window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.body.classList.add('loaded');
  });

  const fills = document.querySelectorAll('.bar-fill');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.setProperty('--level', el.dataset.level);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    fills.forEach((el) => io.observe(el));
  } else {
    fills.forEach((el) => el.style.setProperty('--level', el.dataset.level));
  }

  const navLinks = [...document.querySelectorAll('.nav-block[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.hash))
    .filter(Boolean);

  const setActive = () => {
    const fromTop = window.scrollY + window.innerHeight * 0.35;
    let current = null;
    sections.forEach((section) => {
      if (section.offsetTop <= fromTop) current = section.id;
    });
    navLinks.forEach((link) => {
      if (link.hash === '#' + current) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  const root = document.documentElement;
  const themeBtn = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const syncThemeUI = () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    const label = themeBtn.querySelector('.tt-label');
    label.textContent = dark ? 'LIGHT' : 'DARK';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeMeta.setAttribute('content', dark ? '#1a1611' : '#111111');
  };
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('caquanh-theme', next); } catch (e) {}
      syncThemeUI();
    });
    syncThemeUI();
  }

  // Live weather — Hanoi (Open-Meteo, no key)
  const wxStrip = document.getElementById('wx-strip');
  const wxPanel = wxStrip ? wxStrip.querySelector('.wx-panel') : null;
  const wxTemp = document.getElementById('wx-temp');
  const wxCond = document.getElementById('wx-cond');

  const WX_COLORS = { X: '#111111', Y: '#FFE14D', P: '#F5EFE0', B: '#6487E8', K: '#74C7E3' };
  const WX_CLOUD_TOP = [
    ['P', 3, 3, 10, 4],
    ['P', 6, 1, 4, 2],
    ['P', 1, 5, 14, 4],
    ['X', 1, 9, 14, 1]
  ];
  const WX_ICONS = {
    sun: [
      ['Y', 5, 5, 6, 6],
      ['Y', 7, 1, 2, 3], ['Y', 7, 12, 2, 3],
      ['Y', 1, 7, 3, 2], ['Y', 12, 7, 3, 2],
      ['Y', 2, 2, 2, 2], ['Y', 12, 2, 2, 2],
      ['Y', 2, 12, 2, 2], ['Y', 12, 12, 2, 2]
    ],
    moon: [
      ['Y', 5, 3, 8, 10],
      ['K', 3, 1, 6, 8]
    ],
    partly: [
      ['Y', 10, 1, 4, 4], ['Y', 11, 0, 2, 1], ['Y', 15, 2, 1, 2],
      ['P', 2, 6, 7, 3], ['P', 0, 9, 11, 3], ['X', 0, 12, 11, 1]
    ],
    cloudy: [
      ['P', 3, 5, 10, 4], ['P', 6, 3, 4, 2], ['P', 1, 7, 14, 4], ['X', 1, 11, 14, 1]
    ],
    fog: [
      ['X', 1, 4, 14, 2], ['X', 4, 7, 9, 2], ['X', 1, 10, 14, 2], ['X', 4, 13, 8, 2]
    ],
    rain: [
      ...WX_CLOUD_TOP,
      ['B', 3, 11, 2, 3], ['B', 7, 12, 2, 3], ['B', 11, 11, 2, 3]
    ],
    snow: [
      ...WX_CLOUD_TOP,
      ['P', 3, 11, 2, 2], ['P', 7, 12, 2, 2], ['P', 11, 11, 2, 2]
    ],
    storm: [
      ...WX_CLOUD_TOP,
      ['Y', 8, 10, 3, 2], ['Y', 7, 12, 3, 2], ['Y', 9, 14, 2, 2]
    ]
  };
  const wxIconSvg = (name) => {
    const rects = (WX_ICONS[name] || WX_ICONS.cloudy)
      .map(([c, x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${WX_COLORS[c]}"/>`)
      .join('');
    return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" role="img">${rects}</svg>`;
  };
  const wxDescribe = (code, day) => {
    if (code === 0) return day ? ['sun', 'Clear sky'] : ['moon', 'Clear night'];
    if (code === 1 || code === 2) return ['partly', code === 1 ? 'Mostly clear' : 'Partly cloudy'];
    if (code === 3) return ['cloudy', 'Overcast'];
    if (code === 45 || code === 48) return ['fog', 'Foggy'];
    if (code >= 51 && code <= 57) return ['rain', 'Drizzle'];
    if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return ['rain', 'Rain'];
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return ['snow', 'Snow'];
    if (code >= 95) return ['storm', 'Thunderstorm'];
    return ['cloudy', 'Uncharted'];
  };
  const loadWeather = async () => {
    try {
      const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8342&current=temperature_2m,is_day,weather_code&timezone=Asia%2FBangkok');
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      const cur = data.current;
      const [icon, label] = wxDescribe(cur.weather_code, cur.is_day === 1);
      wxPanel.innerHTML = wxIconSvg(icon);
      wxTemp.textContent = Math.round(cur.temperature_2m) + '°C';
      wxCond.textContent = label;
      wxStrip.classList.remove('is-offline');
    } catch (e) {
      wxPanel.innerHTML = '';
      wxTemp.textContent = '--°C';
      wxCond.textContent = 'OFFLINE';
      wxStrip.classList.add('is-offline');
    }
  };
  if (wxStrip && 'fetch' in window) {
    loadWeather();
    setInterval(loadWeather, 10 * 60 * 1000);
  }
});
