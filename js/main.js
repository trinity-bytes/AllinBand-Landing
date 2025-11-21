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
  // NAVBAR ACTIVE SECTION INDICATOR
  // ========================================
  const indicator = document.querySelector(".navbar-indicator");
  const navLinks = document.querySelectorAll(".navbar-link[data-section]");
  const sections = document.querySelectorAll("section[id]");

  function updateIndicator() {
    let currentSection = "";
    const scrollPos = window.scrollY + 200;

    // Detectar sección actual
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // Actualizar línea indicadora
    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("data-section") === currentSection) {
        link.classList.add("active");

        // Posicionar la línea
        const linkRect = link.getBoundingClientRect();
        const menuRect = link.closest(".navbar-menu").getBoundingClientRect();

        indicator.style.width = linkRect.width + "px";
        indicator.style.left = linkRect.left - menuRect.left + "px";
        indicator.classList.add("visible");
      }
    });

    // Ocultar si no hay sección activa
    if (!currentSection) {
      indicator.classList.remove("visible");
    }
  }

  // Ejecutar en scroll, load y resize
  window.addEventListener("scroll", updateIndicator);
  window.addEventListener("load", updateIndicator);
  window.addEventListener("resize", updateIndicator);

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
  // BACK TO TOP
  // ========================================
  
  const backToTopButton = document.getElementById('backToTop');
  
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'inline-flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========================================
  // CONSOLE LOG (DESARROLLO)
  // ========================================
  console.log("✅ AllinBand - JavaScript cargado correctamente");
  console.log("🏥 Vivessence © 2025");
})();
