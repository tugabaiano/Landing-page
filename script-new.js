// Máscara robusta para CPF com validação
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
