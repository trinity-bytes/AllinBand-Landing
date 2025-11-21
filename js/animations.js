/**
 * AllinBand — Animaciones y Efectos
 * Intersection Observer para reveal effects
 */

(function () {
  "use strict";

  // ========================================
  // SCROLL REVEAL ANIMATION
  // ========================================

  // Verificar que el navegador soporte Intersection Observer
  if ("IntersectionObserver" in window) {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOptions = {
      threshold: 0.15, // Se activa cuando 15% del elemento es visible
      rootMargin: "0px 0px -50px 0px", // Offset desde el bottom
    };

    const revealOnScroll = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Una vez revelado, dejar de observar (opcional)
          observer.unobserve(entry.target);
        }
      });
    },
    revealOptions);

    // Observar todos los elementos con clase .reveal
    revealElements.forEach((element) => {
      revealOnScroll.observe(element);
    });
  } else {
    // Fallback: Si el navegador no soporta IntersectionObserver,
    // mostrar todos los elementos directamente
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => {
      element.classList.add("active");
    });
  }

  // ========================================
  // PARALLAX EFFECT (OPCIONAL - HERO IMAGE)
  // ========================================

  // Comentado para evitar conflicto con animación CSS 'float'
  /*
  const heroImage = document.querySelector(".hero-image img");

  if (heroImage) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const heroSection = document.querySelector(".hero");

      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;

        // Solo aplicar parallax si estamos dentro de la sección hero
        if (scrolled < heroHeight) {
          const parallaxSpeed = 0.3;
          heroImage.style.transform = `translateY(${
            scrolled * parallaxSpeed
          }px)`;
        }
      }
    });
  }
  */

  // ========================================
  // COUNTER ANIMATION (OPCIONAL)
  // Si quieres agregar contadores animados (ej: "99.5% disponibilidad")
  // ========================================

  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  }

  // Ejemplo de uso (descomenta si agregas elementos con clase .counter):
  /*
  const counters = document.querySelectorAll('.counter');
  
  const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
  */

  // ========================================
  // PREFERS REDUCED MOTION
  // Respetar preferencias de accesibilidad
  // ========================================

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // Desactivar animaciones para usuarios que prefieren menos movimiento
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("active");
    });

    console.log("ℹ️ Animaciones reducidas (preferencia del usuario)");
  }

  console.log("✨ Animaciones inicializadas");
})();
