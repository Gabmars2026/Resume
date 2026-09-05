const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('nav a')];

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        const selected = link.getAttribute('href') === `#${visible.target.id}`;
        link.toggleAttribute('aria-current', selected);
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
  );

  sections.forEach((section) => observer.observe(section));
}
