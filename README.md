# AllinBand — Landing Page

![AllinBand](https://img.shields.io/badge/AllinBand-Vivessence-2563EB?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Landing page para **AllinBand**, una pulsera inteligente de monitoreo continuo de signos vitales con detección temprana mediante Machine Learning y respuesta automática a emergencias.

**Proyecto académico** desarrollado para el curso de Arquitectura de Software - Universidad Peruana de Ciencias Aplicadas (UPC).

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Uso](#-instalación-y-uso)
- [Personalización de Estilos](#-personalización-de-estilos)
- [Historias de Usuario Implementadas](#-historias-de-usuario-implementadas)
- [Deploy a GitHub Pages](#-deploy-a-github-pages)
- [Accesibilidad](#-accesibilidad)
- [Optimización y Performance](#-optimización-y-performance)
- [Roadmap](#-roadmap)
- [Créditos](#-créditos)

---

## ✨ Características

- ✅ **Diseño Responsive** — Mobile-first, optimizado para todos los dispositivos
- ✅ **Altamente Personalizable** — Sistema de variables CSS para cambios rápidos
- ✅ **Accesible** — WCAG 2.1 AA compliant
- ✅ **Animaciones Suaves** — Intersection Observer para reveal effects
- ✅ **SEO Optimizado** — Meta tags, estructura semántica
- ✅ **Formulario de Contacto** — Validación en tiempo real
- ✅ **FAQ Interactivo** — Accordion con accesibilidad
- ✅ **Performance** — CSS y JS modulares, sin dependencias externas

---

## 🛠️ Tecnologías

- **HTML5** — Estructura semántica
- **CSS3** — Custom Properties, Flexbox, Grid
- **JavaScript Vanilla** — Sin frameworks, modular
- **Google Fonts** — Inter & Poppins

**Sin dependencias externas.** Todo el código es nativo.

---

## 📁 Estructura del Proyecto

```
allinband-landing/
├── index.html              # Página principal
├── css/
│   ├── variables.css       # 🎨 Variables de diseño (PERSONALIZACIÓN)
│   ├── reset.css           # Normalización CSS
│   ├── base.css            # Estilos base y tipografía
│   ├── components.css      # Componentes reutilizables
│   ├── sections.css        # Estilos de secciones
│   └── utilities.css       # Clases utilitarias
├── js/
│   ├── main.js             # Lógica principal
│   ├── animations.js       # Animaciones scroll
│   └── form.js             # Validación formulario
├── assets/
│   ├── images/             # Imágenes del proyecto
│   └── icons/              # Iconos y favicon
└── README.md               # Este archivo
```

---

## 🚀 Instalación y Uso

### Opción 1: Abrir directamente

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/allinband-landing.git
   cd allinband-landing
   ```

2. Abre `index.html` en tu navegador favorito.

### Opción 2: Servidor local (recomendado)

Usando **Live Server** (VS Code):

- Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Click derecho en `index.html` → "Open with Live Server"

Usando **Python**:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Abre `http://localhost:8000`

---

## 🎨 Personalización de Estilos

### 🔥 Guía Rápida: Cambiar Colores

Todo el sistema de colores está centralizado en `css/variables.css`.

#### Cambiar el color primario (azul → verde):

```css
/* css/variables.css - Línea 12 */
--color-primary: #10b981; /* Verde */
--color-primary-light: #34d399;
--color-primary-dark: #059669;
```

**¡Y listo!** Todos los botones, enlaces, badges y elementos con color primario cambiarán automáticamente.

### 📐 Sistema de Variables Disponibles

#### Colores

```css
--color-primary         /* Color principal de marca */
--color-secondary       /* Color secundario */
--color-accent          /* Color de acento */
--color-gray-[50-900]   /* Escala de grises */
```

#### Tipografía

```css
--font-primary          /* Fuente del cuerpo */
--font-headings         /* Fuente de títulos */
--text-[xs-6xl]         /* Tamaños de texto */
--font-[light-extrabold] /* Pesos de fuente */
```

#### Espaciado

```css
--space-[1-32]          /* Espacios (4px-128px) */
--section-padding-y     /* Padding de secciones */
```

#### Bordes y Sombras

```css
--radius-[sm-2xl]       /* Bordes redondeados */
--shadow-[sm-2xl]       /* Sombras */
```

#### Animaciones

```css
--transition-fast       /* 150ms */
--transition-base       /* 250ms */
--transition-slow       /* 350ms */
```

### 🎯 Ejemplos de Personalización

#### Cambiar toda la paleta de colores

```css
/* css/variables.css */
:root {
  --color-primary: #8b5cf6; /* Morado */
  --color-secondary: #ec4899; /* Rosa */
  --color-accent: #f59e0b; /* Amarillo */
}
```

#### Cambiar tipografía

```css
/* css/variables.css */
:root {
  --font-primary: "Roboto", sans-serif;
  --font-headings: "Montserrat", sans-serif;
}

/* No olvides agregar las fuentes en index.html o base.css */
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Montserrat:wght@700&display=swap");
```

#### Ajustar espaciado de secciones

```css
/* css/variables.css */
:root {
  --section-padding-y: 6rem; /* Más espacio en desktop */
  --section-padding-y-mobile: 3rem; /* Más espacio en móvil */
}
```

---

## 📝 Historias de Usuario Implementadas

Este proyecto cumple con las siguientes User Stories de la **Épica 05 (EP05)** — Experiencia del visitante en la Landing Page:

| ID       | Título                             | Implementación                         |
| -------- | ---------------------------------- | -------------------------------------- |
| **US12** | Beneficio de autonomía y seguridad | ✅ Sección Hero + Beneficios Pacientes |
| **US13** | Funcionamiento sencillo            | ✅ Sección "Cómo funciona" + FAQ       |
| **US14** | Menos ansiedad del cuidado         | ✅ Sección Beneficios Cuidadores       |
| **US15** | Herramientas de supervisión        | ✅ Sección Características de la App   |

### Mapeo de Secciones HTML

```html
<!-- US12: Autonomía y seguridad -->
<section class="hero">
  <!-- Hero principal -->
  <section id="beneficios">
    <!-- Beneficios pacientes -->

    <!-- US13: Funcionamiento sencillo -->
    <section id="como-funciona">
      <!-- 3 pasos -->
      <section id="faq">
        <!-- Preguntas frecuentes -->

        <!-- US14: Menos ansiedad del cuidado -->
        <section id="beneficios-cuidadores">
          <!-- Beneficios cuidadores -->

          <!-- US15: Herramientas de supervisión -->
          <section id="caracteristicas"><!-- Features de la app --></section>
        </section>
      </section>
    </section>
  </section>
</section>
```

---

## 🌐 Deploy a GitHub Pages

### Paso 1: Preparar el repositorio

```bash
git add .
git commit -m "Initial commit: AllinBand landing page"
git branch -M main
git remote add origin https://github.com/tu-usuario/allinband-landing.git
git push -u origin main
```

### Paso 2: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **main** → Folder: **/ (root)**
5. Save

En unos minutos, tu sitio estará disponible en:

```
https://tu-usuario.github.io/allinband-landing/
```

### Paso 3: (Opcional) Dominio personalizado

En Settings → Pages → Custom domain, agrega:

```
allinband.tudominio.com
```

Y configura un CNAME en tu proveedor de DNS apuntando a:

```
tu-usuario.github.io
```

---

## ♿ Accesibilidad

Este proyecto sigue las pautas **WCAG 2.1 AA**:

- ✅ **Landmarks semánticos** (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ **ARIA labels** en navegación y formularios
- ✅ **Focus visible** en elementos interactivos
- ✅ **Contraste de color** > 4.5:1
- ✅ **Keyboard navigation** completa
- ✅ **Alt text** en imágenes
- ✅ **Prefers-reduced-motion** respetado

### Pruebas recomendadas

- **WAVE**: https://wave.webaim.org/
- **axe DevTools**: Extensión de navegador
- **Lighthouse**: Auditoría de Chrome DevTools

---

## ⚡ Optimización y Performance

### Checklist de optimización

- [ ] Comprimir imágenes (TinyPNG, Squoosh)
- [ ] Usar formatos modernos (WebP, AVIF)
- [ ] Minificar CSS y JS en producción
- [ ] Agregar `loading="lazy"` a imágenes
- [ ] Configurar cache en headers del servidor
- [ ] Reducir Critical Rendering Path

### Herramientas recomendadas

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Lighthouse**: Chrome DevTools

---

## 🗺️ Roadmap

### Fase 1: MVP ✅ (Completado)

- [x] Estructura HTML semántica
- [x] Sistema de variables CSS
- [x] Responsive design
- [x] Animaciones scroll
- [x] Formulario funcional

### Fase 2: Mejoras (Próximos pasos)

- [ ] Agregar imágenes reales del wearable
- [ ] Crear favicon personalizado
- [ ] Optimizar imágenes (WebP)
- [ ] Agregar Open Graph images
- [ ] Integrar Google Analytics
- [ ] Pruebas de usabilidad

### Fase 3: Avanzado

- [ ] Modo oscuro (dark theme)
- [ ] Multiidioma (ES/EN)
- [ ] Integración con backend real
- [ ] Animaciones avanzadas (Lottie)
- [ ] PWA capabilities

---

## 🎨 Assets Pendientes

### Imágenes necesarias

- `assets/images/wearable-hero.png` — Mockup del dispositivo (500x500px)
- `assets/icons/favicon.svg` — Favicon del sitio

### Sugerencias de recursos gratuitos

**Mockups:**

- [Smartmockups](https://smartmockups.com/)
- [Placeit](https://placeit.net/)

**Iconos:**

- [Heroicons](https://heroicons.com/)
- [Lucide](https://lucide.dev/)

**Ilustraciones:**

- [unDraw](https://undraw.co/)
- [Storyset](https://storyset.com/)

---

## 👥 Créditos

**Proyecto desarrollado por:**

- Equipo Vivessence (Grupo 3)
- Curso: Arquitectura de Software (SI725)
- Universidad Peruana de Ciencias Aplicadas (UPC)
- Ciclo 2025-02

**Contexto basado en:**

- Documento TB2: `upc-pre-202502-si725-13216-Grupo-3-report-tb2.docx`

---

## 📄 Licencia

Este es un proyecto académico con fines educativos. No está destinado a uso comercial.

---

## 🆘 Soporte

¿Tienes preguntas o problemas?

1. Revisa la [sección de personalización](#-personalización-de-estilos)
2. Consulta las variables en `css/variables.css`
3. Verifica la consola del navegador (F12)

---

## 🚀 ¡Listo para empezar!

```bash
# Clona el repo
git clone https://github.com/tu-usuario/allinband-landing.git

# Abre el proyecto
cd allinband-landing
code .

# Abre con Live Server o tu servidor favorito
# ¡Y comienza a personalizar!
```

---

**© 2025 Vivessence — AllinBand** | Seguridad que te acompaña. Autonomía que te cuida. 💙
