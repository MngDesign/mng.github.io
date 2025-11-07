// Loader fade out
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        document.getElementById('loader-overlay').style.opacity = 0;
        setTimeout(function() {
          document.getElementById('loader-overlay').style.display = 'none';
        }, 400);
      }, 1200);
    });

    // Hamburger morph on open
    const menuOverlay = document.getElementById('menu-overlay');
    const hamburger = document.getElementById('open-menu');
    function toggleMenu() {
      menuOverlay.classList.toggle('open');
      hamburger.classList.toggle('open');
    }
    hamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', () => {
      menuOverlay.classList.remove('open');
      hamburger.classList.remove('open');
    });
    menuOverlay.querySelector('nav').addEventListener('click', e => {
      e.stopPropagation();
    });
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') toggleMenu();
    });

    // Header hide/reveal on scroll
    let lastScroll = 0;
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        header.classList.remove('header--hidden');
      } else if (currentScroll > lastScroll) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }
      lastScroll = currentScroll;
    });

    // Show shadow behind hamburger only on scroll
    function handleScroll() {
      if(window.scrollY > 8) {
        hamburger.classList.add('scrolled');
      } else {
        hamburger.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    //to close the overlay when a menu link is clicked
      document.querySelectorAll('#menu-overlay .menu-link').forEach(link => {
      link.addEventListener('click', () => {
      menuOverlay.classList.remove('open');
      hamburger.classList.remove('open');
    });
    });

    // Stepper style- Data for each step (title + description)
    const stepData = [
        { title: "UX Audit", desc: "Understanding the Current State" },
        { title: "Strategic Proposal", desc: "Defining Direction" },
        { title: "Deep Analysis", desc: "Knowing Users & Business Needs" },
        { title: "Information Architecture & Usability Enhancement", desc: "Structuring content and improving interaction flows for better usability." },
        { title: "Wireframes, Prototypes, & Design System", desc: "Creating low-fidelity wireframes, interactive prototypes, and a reusable design system." },
        { title: "Development Handover & Support", desc: "Delivering assets, specs, and ongoing support to the development team." },
        { title: "Usability Testing & Iterations", desc: "Conducting user tests, gathering feedback, and iterating on the design." }
    ];

    const steps = document.querySelectorAll('.step');
    const panel = document.getElementById('contentPanel');

    steps.forEach(step => {
        step.addEventListener('click', () => {
            // Remove active class from all
            steps.forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));

            // Add active to clicked
            step.classList.add('active');

            // Update panel
            const idx = step.dataset.index;
            panel.innerHTML = `
                <div class="content-title">${stepData[idx].title}</div>
                <div class="content-desc">${stepData[idx].desc}</div>
            `;
            panel.classList.add('active');
        });
    });

    // Initialise first step (already active in HTML)
    panel.innerHTML = `
        <div class="content-title">${stepData[0].title}</div>
        <div class="content-desc">${stepData[0].desc}</div>
    `;