// Basic init & scroll animations + VanillaTilt setup

document.addEventListener('DOMContentLoaded', function () {
  // Initialize tilt on project cards and any .tilt elements
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('.tilt'), {
      max: 10,
      speed: 400,
      glare: false,
      scale: 1.02
    });
  }

  // Simple reveal on scroll using IntersectionObserver
  const revealElems = document.querySelectorAll('.card, .section-title, .skill-logo, .project-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElems.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    io.observe(el);
  });

  // Smooth scroll for navbar links
  document.querySelectorAll('a.nav-link, header a, .btn').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
