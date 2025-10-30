
# Vivessence — AllinBand
**Contexto unificado para VS Code Copilot (Landing Page + Historias de Usuario)**

**Fuente:** Informe del TB2 (archivo provisto por el equipo): `upc-pre-202502-si725-13216-Grupo-3-report-tb2.docx`.

---

## 1) Descripción breve del proyecto
**AllinBand** es una pulsera inteligente (*wearable*) creada por la startup **Vivessence** para el **monitoreo continuo de signos vitales** (p. ej., frecuencia cardíaca, saturación de oxígeno, temperatura), con **detección temprana mediante Machine Learning** y **respuesta automática** ante emergencias: alerta local en la pulsera, notificaciones a una **red jerarquizada de contactos** y activación del contacto con **servicios de emergencia** con geolocalización. El objetivo es pasar de un modelo **reactivo** a uno **preventivo**, brindando **autonomía con seguridad** al paciente y **tranquilidad** al cuidador.

## 2) Segmentos objetivo
- **S1 – Pacientes**: Adultos mayores y personas con condiciones de riesgo (especial foco cardiometabólico).
- **S2 – Cuidadores/Familiares**: Personas que necesitan supervisión remota y reducción de ansiedad.

## 3) Propuesta de valor
- **Para el paciente**: Seguridad y autonomía gracias al monitoreo pasivo 24/7 y la activación automática de ayuda.
- **Para el cuidador**: Tranquilidad con notificaciones en tiempo real, signos vitales y ubicación durante una emergencia, además de historial para seguimiento.

## 4) Funcionalidades clave (MVP)
- Monitoreo en tiempo real desde el *wearable*.
- Alerta local (sonido/vibración) y **protocolo automático de ayuda**.
- Notificación a **red jerarquizada** de contactos con **datos y geolocalización**.
- App del cuidador con **panel de emergencia**, **historial** y **mapa de centros cercanos**.
- **Personalización** de umbrales vía **Machine Learning**.

## 5) Requisitos no funcionales (extracto)
- **Latencia de alerta** ≤ 5 s; **carga de historial** < 2 s.
- **Disponibilidad** del servicio ≥ 99.5% mensual.
- **Autonomía** del dispositivo: 24 h por carga.
- **Seguridad y privacidad**: cifrado AES‑256; autenticación por PIN/biometría.
- **Compatibilidad**: Android 10+ / iOS 14+; **BLE**; **OTA** para firmware.

## 6) Épicas
- **EP01** – Sistema de detección y respuesta automatizada a emergencias.
- **EP02** – Gestión proactiva de la salud y autonomía del paciente.
- **EP03** – Gestión de emergencias y coordinación de ayuda remota.
- **EP04** – Supervisión proactiva y confianza en el sistema (cuidador).
- **EP05** – Experiencia del visitante en la Landing Page.
- **EP06** – Infraestructura de API para monitoreo y alertas.

## 7) Historias de Usuario (18)
> Extraídas del informe provisto por el equipo (TB2). Todas las descripciones y criterios fueron condensados para facilitar su uso en copy y lógica de la landing.

| ID | Título | Descripción | Criterios de Aceptación (resumen Given/When/Then) | Epic |
|---|---|---|---|---|
| US01 / EP01 | Monitoreo continuo de signos vitales | Como paciente con una condición cardíaca, quiero que el sistema monitoree de forma continua y automática mis signos vitales, para detectar anomalías críticas sin que yo deba intervenir. | **Escenario 1:** Detección anómala. **Given** rango seguro; **When** frecuencia > umbral; **Then** registra anomalía crítica. **Escenario 2:** Valor normal. **Given** rango seguro; **When** medición dentro del rango; **Then** registra normal y no alerta. | EP01 |
| US02 / EP01 | Alerta local en el dispositivo | Como paciente vulnerable, quiero que la pulsera me alerte con sonido y vibración ante una anomalía, para ser consciente de la situación. | **Given** anomalía crítica registrada; **When** se inicia protocolo; **Then** la pulsera activa alerta sonora y vibratoria. | EP01 |
| US03 / EP01 | Activación automática del protocolo de ayuda | Como paciente con riesgo cardíaco, quiero que el sistema contacte automáticamente a mis familiares y a los servicios de emergencia si detecta una crisis, para asegurar ayuda incluso si estoy incapacitado. | **Esc. 1:** Envío exitoso. **Given** alerta local y contactos; **When** no se cancela en tiempo; **Then** envía notificación con datos y geolocalización. **Esc. 2:** Falsa alarma. **Given** alerta activa; **When** el paciente cancela; **Then** se detiene protocolo y no se notifica. | EP01 |
| US04 / EP02 | Acceso al historial de salud | Como paciente, quiero acceder a mi historial de signos vitales desde la app, para analizar tendencias y compartir con mi médico. | **Given** registros de 30 días; **When** solicito historial de la última semana; **Then** la app muestra los datos del período. | EP02 |
| US05 / EP02 | Localización de Centros de Salud cercanos | Como persona con riesgo cardíaco, quiero ver centros de salud cercanos, para acudir rápidamente si me siento mal. | **Given** permisos de ubicación; **When** solicito búsqueda; **Then** lista de centros ordenados por distancia. | EP02 |
| US06 / EP02 | Personalización de alertas con ML | Como paciente, quiero que mis datos se analicen con ML y actualicen umbrales en mi pulsera, para alertas más precisas y personalizadas. | **Given** dataset enviado al servicio de ML; **When** procesa; **Then** devuelve umbrales personalizados y el *wearable* los actualiza. | EP02 |
| US07 / EP03 | Recepción de alertas de emergencia | Como familiar, quiero recibir notificaciones automáticas al ocurrir una emergencia, para actuar de inmediato. | **Given** soy contacto de emergencia; **When** se activa el protocolo; **Then** recibo notificación con tipo de anomalía. | EP03 |
| US08 / EP03 | Visualización de datos de emergencia | Como cuidador, al recibir una alerta, quiero ver signos vitales y ubicación en tiempo real, para decidir informado. | **Given** recibí notificación; **When** abro el estado en la app; **Then** muestra signos actuales y última ubicación. | EP03 |
| US09 / EP03 | Protocolo de ayuda jerarquizado | Como familiar, quiero que el sistema notifique a una red jerarquizada de contactos, para asegurar respuesta si yo no puedo. | **Given** contacto primario no acusa recibo; **When** expira tiempo; **Then** se escala al siguiente contacto. | EP03 |
| US10 / EP04 | Historial para seguimiento (cuidador) | Como cuidador, quiero ver el historial del paciente, para seguimiento proactivo y colaboración con su médico. | **Given** acceso autorizado; **When** solicito historial por rango; **Then** se muestran los datos del período. | EP04 |
| US11 / EP04 | Fiabilidad de alertas | Como cuidador, quiero alertas confiables y personalizadas, para evitar fatiga por falsas alarmas. | **Given** umbrales personalizados; **When** valor fuera de rango genérico pero dentro del patrón aprendido; **Then** no envía alerta al cuidador. | EP04 |
| US12 / EP05 | Beneficio de autonomía y seguridad (landing) | Como visitante con condición de riesgo, quiero entender rápido cómo la pulsera me da seguridad y autonomía, para decidir si me conviene. | **Given** visitante (paciente) en la landing; **When** navega beneficios; **Then** ve explicación clara de monitoreo automático → independencia y seguridad. | EP05 |
| US13 / EP05 | Funcionamiento sencillo (landing) | Como visitante (adulto mayor), quiero ver que el uso es sencillo, para confirmar que no es complicado. | **Given** visitante en landing; **When** busca cómo se usa; **Then** ve funcionamiento pasivo y continuo, sin interacciones complejas. | EP05 |
| US14 / EP05 | Menos ansiedad del cuidado (landing) | Como visitante (cuidador), quiero saber cómo el sistema me mantiene informado, para confirmar que me dará tranquilidad. | **Given** visitante (cuidador) en landing; **When** revisa beneficios para la familia; **Then** ve notificaciones automáticas y monitoreo remoto. | EP05 |
| US15 / EP05 | Herramientas de supervisión (landing) | Como visitante (familiar), quiero conocer características de la app (historial, geolocalización), para evaluar si cubre mis necesidades. | **Given** visitante (cuidador) en landing; **When** navega características; **Then** ve datos en tiempo real, historial y ubicación. | EP05 |
| US16 / EP06 | Recepción de datos del *wearable* (API) | Como developer, necesito un endpoint para recibir paquetes de signos vitales, para almacenarlos y procesarlos en tiempo real. | **Given** servidor escuchando; **When** recibe payload JSON válido desde *wearable*; **Then** responde 200 OK y registra log. | EP06 |
| US17 / EP06 | Exposición de datos de emergencia (API) | Como developer, necesito un endpoint REST para que la app del cuidador consulte una alerta activa, para mostrar detalles. | **Given** “alerta activa” para un paciente; **When** la app consulta; **Then** responde JSON con tipo, signos y geolocalización. | EP06 |
| US18 / EP06 | Actualización remota de configuración (API) | Como developer, necesito una API para enviar configuración/umbrales al *wearable*, para ajustar alertas de forma remota. | **Given** nueva configuración disponible; **When** el servidor la envía; **Then** el dispositivo responde 200 OK y registra actualización. | EP06 |

## 8) Guía de contenido para la Landing Page (EP05)
**Estructura recomendada:**
1. **Hero (valor inmediato)**: Titular fuerte (p. ej., “Seguridad que te acompaña. Autonomía que te cuida.”). Subtítulo explicando monitoreo y respuesta automática. CTAs diferenciados: “Soy paciente” / “Soy cuidador”.
2. **Cómo funciona (simple)**: 3 pasos – *Monitorea* → *Detecta* → *Activa ayuda*. Resaltar uso pasivo y continuo.
3. **Beneficios para Pacientes**: Autonomía + seguridad; alarma en la pulsera; acceso a historial.
4. **Beneficios para Cuidadores**: Notificaciones, datos y ubicación en emergencias; menos ansiedad.
5. **Características de la App**: Panel tiempo real, historial, geolocalización, centros cercanos.
6. **Tecnología y Privacidad**: ML para personalización; cifrado; autenticación; compatibilidad.
7. **FAQ**: falsas alarmas (cancelación en la pulsera), conectividad, batería de 24 h.
8. **CTA final**: “Solicitar demo” o “Únete al piloto”.

**Microcopy sugerido:**
- Paciente: “Usa tu pulsera como siempre. Nosotros vigilamos por ti.” / “Sin apps complicadas: la pulsera trabaja sola, 24/7.”
- Cuidador: “Si algo pasa, te avisamos de inmediato con la información que necesitas: señal vital y ubicación.” / “Consulta el historial cuando quieras y coordina mejor con el médico.”

## 9) SEO / Palabras clave
pulsera inteligente salud; monitoreo signos vitales; alerta automática emergencias; wearable para adultos mayores; cuidado remoto familiar; detección temprana con ML; geolocalización en emergencias.

## 10) Notas para uso con VS Code Copilot
- Mantener este archivo en la raíz del repo como `ALLINBAND_CONTEXT.md` para que Copilot lo use como referencia.
- Añadir comentarios en los componentes React/Vue/Svelte apuntando a las US (por ejemplo: `// US12: Beneficio de autonomía y seguridad`).
- Incluir `data-testid` y etiquetas ARIA considerando **WCAG 2.1 AA**.

---

**© Vivessence – AllinBand** — Documento de contexto consolidado para diseño de landing y backlog funcional.
