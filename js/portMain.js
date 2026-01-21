const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));


const sections = document.querySelectorAll("section[id]");
const sideNavLinks = document.querySelectorAll(".side-text-nav a");

const sideObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sideNavLinks.forEach(link => link.classList.remove("active"));

        const active = document.querySelector(
          `.side-text-nav a[data-section="${entry.target.id}"]`
        );

        if (active) active.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6
  }
);

sections.forEach(section => sideObserver.observe(section));