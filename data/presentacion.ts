export const hero = {
  badge: "Propuesta comercial · Mito Digital",
  title: {
    lead: "Prospección integral para que tu equipo hable con",
    rotating: ["quien decide", "quien compra", "quien te espera", "el cliente correcto"],
  },
  subtitle:
    "Meta Ads y Email Marketing funcionando como un solo sistema: la campaña genera la demanda, el email la persigue y la reunión aparece en la agenda. No son dos servicios sueltos, es un circuito.",
  ctaPrimary: { label: "Ver cómo funciona", href: "#sistema" },
  ctaSecondary: { label: "Hablar con Mito", href: "https://wa.me/5491178870751" },
};

export const problema = {
  eyebrow: "01 · El punto de partida",
  title: "Tu equipo comercial abre la semana sin saber a quién llamar.",
  intro:
    "No es falta de leads, es falta de sistema. La mayoría de las empresas B2B ya invierten en captación: lo que falta es el hilo que une la campaña con la conversación de ventas.",
  items: [
    {
      code: "A",
      title: "Bases frías y desactualizadas",
      body: "Listas compradas o heredadas que nadie depura. Se manda a todos lo mismo y se quema el dominio.",
      accent: "purple" as const,
    },
    {
      code: "B",
      title: "Volumen sin calificación",
      body: "La campaña trae formularios, pero nadie separa al curioso del que realmente tiene presupuesto y urgencia.",
      accent: "orange" as const,
    },
    {
      code: "C",
      title: "Seguimiento que se cae",
      body: "El lead entra un martes y se contacta el viernes siguiente. La ventana de intención ya se cerró.",
      accent: "yellow" as const,
    },
    {
      code: "D",
      title: "Cero trazabilidad",
      body: "No se sabe qué creatividad, qué asunto ni qué segmento generó la reunión. Se decide por intuición.",
      accent: "blue" as const,
    },
  ],
};

export const promesa = {
  eyebrow: "02 · La promesa",
  title: "Qué te llevás, y en cuánto tiempo",
  intro:
    "Un proceso bien explicado no es una oferta. Esto es lo que nos comprometemos a entregar, con fecha.",
  claim:
    "Un flujo constante de reuniones con el decisor que definimos juntos, en 90 días, a un costo por reunión que se mide y baja mes a mes.",
  items: [
    {
      range: "A los 30 días",
      title: "La primera entrega concreta",
      body: "Perfil de cliente ideal documentado, base existente depurada y segmentada, y la primera secuencia al aire. El primer mes no se siente vacío.",
    },
    {
      range: "A los 90 días",
      title: "El sistema calibrado",
      body: "Campañas, públicos y secuencias ajustados con datos propios de tu cuenta, y el costo por reunión consolidado en el tablero.",
    },
    {
      range: "Si no llegamos",
      title: "Seguimos sin cobrar el fee",
      body: "El piso de reuniones se acuerda antes de empezar, a partir de tus números. Si no llegamos en el plazo, seguimos trabajando sin cobrar el fee mensual hasta llegar.",
    },
  ],
};

export const propuesta = {
  eyebrow: "03 · La propuesta",
  title: "Prospección integral",
  claim: "Meta Ads + Email Marketing",
  body: "Un mismo equipo diseña la captación y la conversación. Los datos de la campaña alimentan la segmentación del email, y las respuestas del email vuelven a la campaña como público de retargeting. Ese loop es el producto.",
  pillars: [
    {
      tag: "Motor 1",
      title: "Meta Ads",
      subtitle: "Genera la demanda",
      description:
        "Estructura de campañas pensada para B2B: no buscamos alcance, buscamos contactos que se puedan trabajar.",
      bullets: [
        "Definición de ICP y públicos por interés, cargo y comportamiento",
        "Lead forms nativos con preguntas de calificación",
        "Batería de creatividades y testeo continuo de ángulos",
        "Públicos lookalike a partir de tus mejores clientes",
        "Retargeting sobre quienes interactuaron y no convirtieron",
        "Optimización semanal por costo por lead calificado",
      ],
      accent: "purple" as const,
    },
    {
      tag: "Motor 2",
      title: "Email Marketing",
      subtitle: "Convierte la demanda",
      description:
        "Cada contacto entra a una secuencia diseñada según de dónde vino y qué respondió. Nada queda sin seguimiento.",
      bullets: [
        "Limpieza, enriquecimiento y segmentación de la base",
        "Secuencias automatizadas de nurturing y outbound",
        "Warm-up de dominio y cuidado de la reputación de envío",
        "Test A/B de asuntos, copy y momento de envío",
        "Reactivación de base histórica que ya está dormida",
        "Handoff a ventas con contexto: qué abrió, qué respondió, qué pidió",
      ],
      accent: "orange" as const,
    },
  ],
};

export const sistema = {
  eyebrow: "04 · El sistema",
  title: "Cómo funciona, paso a paso",
  intro:
    "Un circuito de cinco etapas que corre todos los meses. Cada etapa alimenta a la siguiente y devuelve información a la anterior.",
  steps: [
    {
      step: "01",
      title: "Definimos el ICP",
      description:
        "Quién es el cliente ideal, qué problema tiene y con qué palabras lo nombra. Sin esto, todo lo demás es ruido.",
      output: "Perfil de cliente + mensajes clave",
    },
    {
      step: "02",
      title: "Captamos con Meta Ads",
      description:
        "Campañas segmentadas con formularios que califican en el momento. El costo por lead se optimiza semana a semana.",
      output: "Flujo constante de contactos nuevos",
    },
    {
      step: "03",
      title: "Ordenamos la base",
      description:
        "Depuramos, enriquecemos y segmentamos. Cada contacto queda etiquetado por origen, industria y nivel de intención.",
      output: "Base viva, segmentada y accionable",
    },
    {
      step: "04",
      title: "Activamos las secuencias",
      description:
        "El email entra en las primeras 24 horas y sigue con una cadencia pensada, no con envíos masivos improvisados.",
      output: "Conversaciones abiertas, no impresiones",
    },
    {
      step: "05",
      title: "Entregamos a ventas",
      description:
        "El lead calificado llega al equipo comercial con su historial. Lo que no convierte vuelve al retargeting.",
      output: "Reuniones agendadas + loop de reciclaje",
    },
  ],
};

export const loop = {
  eyebrow: "05 · Por qué juntos",
  title: "Separados son dos canales. Juntos son un embudo.",
  cards: [
    {
      title: "Meta alimenta al email",
      body: "Cada lead que entra por campaña cae automáticamente en la secuencia que le corresponde según lo que respondió en el formulario.",
    },
    {
      title: "El email califica",
      body: "Las aperturas, clicks y respuestas separan al interesado real del contacto tibio, sin que ventas pierda tiempo llamando a todos.",
    },
    {
      title: "Los datos vuelven a Meta",
      body: "Los que responden se convierten en base para lookalikes. Los que no, en público de retargeting con otro mensaje.",
    },
    {
      title: "El costo baja con el tiempo",
      body: "Cada mes el sistema aprende: mejores públicos, mejores asuntos, menos desperdicio. El costo por reunión cae, no sube.",
    },
  ],
};

export const metricas = {
  eyebrow: "06 · Qué medimos",
  title: "Reportamos lo que decide, no lo que decora",
  intro:
    "Nada de reportes de alcance e impresiones. Un tablero con los números que le importan al área comercial, disponible siempre y no una vez por mes.",
  items: [
    { label: "Costo por lead", detail: "Cuánto sale traer un contacto nuevo desde Meta Ads." },
    { label: "Leads calificados", detail: "Cuántos de esos contactos cumplen el perfil de cliente ideal." },
    { label: "Tasa de apertura y respuesta", detail: "Salud real de la base y del mensaje, por segmento." },
    { label: "Reuniones agendadas", detail: "El número que ordena todo el sistema." },
    { label: "Costo por reunión", detail: "La métrica de eficiencia que se compara mes a mes." },
    { label: "Atribución por pieza", detail: "Qué creatividad, qué asunto y qué segmento trajeron cada cierre." },
  ],
};

export const cronograma = {
  eyebrow: "07 · Implementación",
  title: "Los primeros 90 días",
  phases: [
    {
      range: "Días 1 — 30",
      title: "Montaje",
      bullets: [
        "Workshop de ICP y propuesta de valor",
        "Configuración de píxel, formularios y automatizaciones",
        "Limpieza y carga de la base existente",
        "Primeras campañas y primera secuencia al aire",
      ],
    },
    {
      range: "Días 31 — 60",
      title: "Calibración",
      bullets: [
        "Testeo de ángulos creativos y públicos",
        "A/B de asuntos y cadencias de email",
        "Primer corte de leads calificados a ventas",
        "Ajuste de criterios de calificación",
      ],
    },
    {
      range: "Días 61 — 90",
      title: "Escala",
      bullets: [
        "Escalado de los públicos y creatividades ganadoras",
        "Lookalikes construidos con datos propios",
        "Secuencias de reactivación sobre base histórica",
        "Tablero de costo por reunión consolidado",
      ],
    },
  ],
};

export const serviciosExtra = {
  eyebrow: "08 · Además",
  title: "Lo que sumamos alrededor del sistema",
  intro:
    "Meta Ads y email marketing son el núcleo y se venden juntos. Estos servicios existen para sostener ese circuito o para resolver necesidades puntuales del equipo, y se presupuestan aparte.",
  nota: "Sobre LinkedIn: es una posibilidad que evaluamos más adelante, recién cuando el sistema esté corriendo y con números propios. No forma parte de esta propuesta y se cotiza por separado.",
  items: [
    {
      title: "Landing pages",
      description:
        "Páginas de destino diseñadas y desarrolladas por nosotros, pensadas para convertir el tráfico de campaña en contactos reales.",
      bullets: ["Diseño y desarrollo a medida", "Optimizadas para velocidad y mobile", "Medición y testeo de conversión"],
      accent: "orange" as const,
    },
    {
      title: "Herramientas internas con IA",
      description:
        "Desarrollamos utilidades a medida para el equipo: bots, buscadores asistidos y automatizaciones que ahorran horas de trabajo manual.",
      bullets: ["Bots de IA para tareas repetitivas", "Buscadores y scoring asistidos por IA", "Automatizaciones sobre el CRM"],
      accent: "yellow" as const,
    },
  ],
};

export const cierre = {
  eyebrow: "09 · Siguiente paso",
  title: "Empecemos por entender a quién querés llegar",
  body: "Una reunión de diagnóstico donde definimos el ICP, revisamos la base que ya tenés y estimamos el costo por reunión realista para tu industria.",
  email: "producciones@mitomkt.com",
  whatsapp: "https://wa.me/5491178870751",
};

export const clientsLabel =
  "Marcas que confiaron en Mito en producción y eventos. Ahora ese mismo equipo genera sus reuniones.";

export const clients: { name: string; src?: string }[] = [
  { name: "Red Hat", src: "/logos/clientes/red-hat.svg" },
  { name: "COELSA", src: "/logos/clientes/coelsa.png" },
  { name: "Avalian", src: "/logos/clientes/avalian.png" },
  { name: "Herbalife", src: "/logos/clientes/herbalife.svg" },
  { name: "SAP", src: "/logos/clientes/sap.svg" },
  { name: "IBM", src: "/logos/clientes/ibm.svg" },
  { name: "Concentrix", src: "/logos/clientes/concentrix.svg" },
  { name: "Toyota", src: "/logos/clientes/toyota.svg" },
  { name: "Citi", src: "/logos/clientes/citi.png" },
  { name: "Oracle", src: "/logos/clientes/oracle.svg" },
  { name: "Cirion", src: "/logos/clientes/cirion.png" },
  { name: "Motorola", src: "/logos/clientes/motorola.svg" },
];

export const navItems = [
  { name: "El problema", href: "#problema" },
  { name: "La promesa", href: "#promesa" },
  { name: "La propuesta", href: "#propuesta" },
  { name: "El sistema", href: "#sistema" },
  { name: "Métricas", href: "#metricas" },
  { name: "Servicios", href: "#servicios" },
];
