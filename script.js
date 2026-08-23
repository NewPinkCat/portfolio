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
});
