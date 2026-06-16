/* =============================================
   THAISA FERNANDES — PM PORTFOLIO
   main.js
   ============================================= */

/* ------------------------------------------
   ROLE CYCLE — Hero animated label
   ------------------------------------------ */
(function initRoleCycle() {
  const roles = ['Podcaster.', 'Author.', 'Leader.', 'Builder.', 'Speaker.'];
  let currentIndex = 0;
  const el = document.getElementById('roleCycle');

  if (!el) return;

  function cycleRole() {
    el.style.opacity = '0';
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % roles.length;
      el.textContent = roles[currentIndex];
      el.style.opacity = '1';
    }, 400);
  }

  setInterval(cycleRole, 2200);
})();


/* ------------------------------------------
   SMOOTH SCROLL — Nav link active state
   ------------------------------------------ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
})();


/* ------------------------------------------
   SCROLL REVEAL — Fade-in on scroll
   ------------------------------------------ */
(function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.exp-item, .project-card, .media-card, .impact-item'
  );

  if (!targets.length) return;

  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
})();


/* ------------------------------------------
   NAV — Active link highlight style
   ------------------------------------------ */
(function injectActiveStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active {
      color: #D85A30;
    }
  `;
  document.head.appendChild(style);
})();