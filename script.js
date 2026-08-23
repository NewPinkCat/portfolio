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
});
