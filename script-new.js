

// Navbar scroll with smooth transitions and blur effect
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

// Smooth scroll behavior enhancement
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
