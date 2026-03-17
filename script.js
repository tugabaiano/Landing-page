// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close menu when link is clicked
if (navMenu) {
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// CPF mask - robust version
const cpfInput = document.getElementById("cpf");
if (cpfInput) {
  cpfInput.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (v.length <= 3) {
      e.target.value = v;
      return;
    }
    if (v.length <= 6) {
      e.target.value = v.replace(/(\d{3})(\d{1,3})/, "$1.$2");
      return;
    }
    if (v.length <= 9) {
      e.target.value = v.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
      return;
    }
    e.target.value = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  });
}

// Navbar scroll with smooth transitions
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  
  if (window.scrollY > 50) {
    if (!navbar.classList.contains("scrolled")) {
      navbar.classList.add("scrolled");
    }
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animação das seções ao entrar no viewport (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar seções para animação
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Observar cards para animação
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
