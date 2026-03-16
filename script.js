// Máscara básica para CPF
const cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length <= 11) {
    value = value.replace(/(\dt{3})(\dt{3})(\dt{3})(\dt{2})/, "$1.$2.$3-$4");
  }
  // Nota: Para uma máscara perfeita, recomenda-se bibliotecas como IMask ou VanillaMasker
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // Adiciona essa linha
    navbar.style.background = "#0d151d";
    navbar.style.padding = "0.5rem 0";
  } else {
    navbar.classList.remove("scrolled"); // Adiciona essa linha
    navbar.style.background = "#1a2a3a";
    navbar.style.padding = "1rem 0";
  }
});
