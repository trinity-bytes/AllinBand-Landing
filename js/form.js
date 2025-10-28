/**
 * AllinBand — Manejo de Formulario
 * Validación y envío del formulario de contacto
 */

(function () {
  "use strict";

  const contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    return;
  }

  // ========================================
  // VALIDACIÓN DEL FORMULARIO
  // ========================================

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validatePhone(phone) {
    // Validación básica: solo números, espacios, guiones y paréntesis
    const regex = /^[\d\s\-\(\)\+]+$/;
    return !phone || regex.test(phone); // Opcional, por eso permite vacío
  }

  function showError(input, message) {
    const formGroup = input.closest(".form-group");
    let errorElement = formGroup.querySelector(".form-error");

    // Crear elemento de error si no existe
    if (!errorElement) {
      errorElement = document.createElement("div");
      errorElement.className = "form-error";
      formGroup.appendChild(errorElement);
    }

    errorElement.textContent = message;
    input.setAttribute("aria-invalid", "true");
    input.style.borderColor = "var(--color-error)";
  }

  function clearError(input) {
    const formGroup = input.closest(".form-group");
    const errorElement = formGroup.querySelector(".form-error");

    if (errorElement) {
      errorElement.remove();
    }

    input.removeAttribute("aria-invalid");
    input.style.borderColor = "";
  }

  function clearAllErrors() {
    const inputs = contactForm.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => clearError(input));
  }

  // ========================================
  // VALIDACIÓN EN TIEMPO REAL
  // ========================================

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const roleSelect = document.getElementById("role");

  if (emailInput) {
    emailInput.addEventListener("blur", function () {
      if (this.value && !validateEmail(this.value)) {
        showError(this, "Por favor, introduce un email válido");
      } else {
        clearError(this);
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener("blur", function () {
      if (this.value && !validatePhone(this.value)) {
        showError(this, "Por favor, introduce un teléfono válido");
      } else {
        clearError(this);
      }
    });
  }

  // ========================================
  // ENVÍO DEL FORMULARIO
  // ========================================

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    clearAllErrors();

    // Obtener valores
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      role: roleSelect.value,
      message: document.getElementById("message").value.trim(),
    };

    // Validaciones
    let isValid = true;

    if (!formData.name) {
      showError(nameInput, "El nombre es obligatorio");
      isValid = false;
    }

    if (!formData.email) {
      showError(emailInput, "El email es obligatorio");
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      showError(emailInput, "Por favor, introduce un email válido");
      isValid = false;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      showError(phoneInput, "Por favor, introduce un teléfono válido");
      isValid = false;
    }

    if (!formData.role) {
      showError(roleSelect, "Por favor, selecciona una opción");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // ========================================
    // SIMULACIÓN DE ENVÍO
    // En producción, aquí harías una llamada a tu backend/API
    // ========================================

    console.log("📤 Datos del formulario:", formData);

    // Deshabilitar botón durante el "envío"
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    // Simular petición (2 segundos)
    setTimeout(function () {
      // Mostrar mensaje de éxito
      showSuccessMessage();

      // Reset formulario
      contactForm.reset();

      // Restaurar botón
      submitButton.disabled = false;
      submitButton.textContent = originalText;

      console.log("✅ Formulario enviado correctamente (simulación)");
    }, 2000);
  });

  // ========================================
  // MENSAJE DE ÉXITO
  // ========================================

  function showSuccessMessage() {
    // Crear mensaje de éxito
    const successDiv = document.createElement("div");
    successDiv.className = "alert-success";
    successDiv.style.cssText = `
      background-color: var(--color-secondary-alpha);
      color: var(--color-secondary-dark);
      padding: var(--space-6);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-6);
      border-left: 4px solid var(--color-secondary);
      animation: slideUp var(--transition-slow) ease-out;
    `;
    successDiv.innerHTML = `
      <strong>¡Gracias por tu interés!</strong><br>
      Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.
    `;

    // Insertar antes del formulario
    contactForm.parentNode.insertBefore(successDiv, contactForm);

    // Scroll hacia el mensaje
    successDiv.scrollIntoView({ behavior: "smooth", block: "center" });

    // Eliminar mensaje después de 5 segundos
    setTimeout(function () {
      successDiv.style.opacity = "0";
      successDiv.style.transform = "translateY(-20px)";
      successDiv.style.transition = "all var(--transition-base)";

      setTimeout(function () {
        successDiv.remove();
      }, 300);
    }, 5000);
  }

  // ========================================
  // INTEGRACIÓN CON API (EJEMPLO)
  // Descomenta y adapta según tu backend
  // ========================================

  /*
  async function submitFormData(formData) {
    try {
      const response = await fetch('https://tu-api.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error en la petición');
      }

      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  */

  console.log("📝 Formulario inicializado");
})();
