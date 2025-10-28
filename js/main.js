/**
 * AllinBand — JavaScript Principal
 * Lógica general de navegación y comportamiento
 */

(function () {
  "use strict";

  // ========================================
  // MOBILE MENU TOGGLE
  // ========================================
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

      navMenu.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", !isExpanded);
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ========================================
  // SMOOTH SCROLL
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Ignorar si es solo "#"
      if (targetId === "#") {
        e.preventDefault();
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    // Agregar sombra al hacer scroll
    if (currentScroll > 50) {
      navbar.style.boxShadow = "var(--shadow-lg)";
    } else {
      navbar.style.boxShadow = "var(--shadow-sm)";
    }

    lastScroll = currentScroll;
  });

  // ========================================
  // FAQ ACCORDION
  // ========================================
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Cerrar todos los items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem
          .querySelector(".faq-question")
          .setAttribute("aria-expanded", "false");
      });

      // Toggle el item clickeado
      if (!isActive) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ========================================
  // BACK TO TOP (OPCIONAL)
  // ========================================
  // Puedes agregar un botón de "volver arriba" si lo deseas
  // Descomenta este código si agregas un botón con id="backToTop"

  /*
  const backToTopButton = document.getElementById('backToTop');
  
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  */

  // ========================================
  // CONSOLE LOG (DESARROLLO)
  // ========================================
  console.log("✅ AllinBand - JavaScript cargado correctamente");
  console.log("🏥 Vivessence © 2025");
})();
