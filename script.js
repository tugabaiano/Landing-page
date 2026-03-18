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

// Smooth scroll enhancement with transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Adiciona efeito de flash na página
      document.body.classList.add('section-clicked');
      setTimeout(() => {
        document.body.classList.remove('section-clicked');
      }, 300);
      
      // Smooth scroll com delay para efeito
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        target.classList.add('scroll-in');
      }, 150);
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

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validação básica
    if (!name || !cpf || !phone || !email || !message) {
      formResponse.innerHTML = '❌ Por favor, preencha todos os campos.';
      formResponse.className = 'error';
      formResponse.style.display = 'block';
      return;
    }
    
    // Simular envio (em produção, isso seria um POST para um backend)
    formResponse.innerHTML = '📧 Enviando mensagem...';
    formResponse.className = '';
    formResponse.style.display = 'block';
    
    setTimeout(() => {
      formResponse.innerHTML = '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.';
      formResponse.className = 'success';
      
      // Limpar formulário
      contactForm.reset();
      
      // Remover mensagem após 5 segundos
      setTimeout(() => {
        formResponse.style.display = 'none';
      }, 5000);
    }, 1000);
  });
}
  
  // Smooth scrolling script can be appended here

  (function() {
    // Enable custom wheel-smoothing on non-touch devices.
    if ('onwheel' in window && !('ontouchstart' in window)) {
      let target = window.scrollY;
      let current = window.scrollY;
      let isRunning = false;
      const ease = 0.7;

      function onWheel(e) {
        // Only intercept when not using modifier keys and not over inputs
        const tag = e.target.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || e.ctrlKey || e.metaKey) return;
        e.preventDefault();
        target += e.deltaY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        target = Math.max(0, Math.min(target, max));
        if (!isRunning) {
          isRunning = true;
          requestAnimationFrame(step);
        }
      }

      function step() {
        current += (target - current) * ease;
        window.scrollTo(0, Math.round(current));
        if (Math.abs(target - current) > 0.5) {
          requestAnimationFrame(step);
        } else {
          isRunning = false;
        }
      }

      window.addEventListener('wheel', onWheel, { passive: false });
      // ensure target syncs on manual scrolls (keyboard/anchor)
      window.addEventListener('scroll', () => {
        if (!isRunning) {
          target = window.scrollY;
          current = window.scrollY;
        }
      }, { passive: true });
    }
  })();

    // Top horizontal scroll progress bar
    (function() {
      const container = document.getElementById('top-progress');
      const bar = container ? container.querySelector('.top-progress-bar') : null;
      if (!bar) return;

      let ticking = false;

      function updateBar() {
        const doc = document.documentElement;
        const scrollTop = window.pageYOffset || doc.scrollTop;
        const height = doc.scrollHeight - window.innerHeight;
        const pct = height > 0 ? (scrollTop / height) : 0;
        const percent = Math.min(100, Math.max(0, pct * 100));
        bar.style.width = percent + '%';
        ticking = false;
      }

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(updateBar);
          ticking = true;
        }
      }, { passive: true });

      // initialize on load
      window.addEventListener('load', updateBar, { passive: true });
      updateBar();
    })();
