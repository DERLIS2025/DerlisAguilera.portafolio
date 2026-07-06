import { BarChart3, Bot, BriefcaseBusiness, LineChart, Rocket, ShieldCheck, TrendingUp, Workflow } from "lucide-react";

export const kpiImpact = [
  { label: "Años conectando negocio + digital", value: "+6", detail: "ecommerce, operaciones y BI" },
  { label: "Empresas con operación digital", value: "4", detail: "retail, mayorista y servicios" },
  { label: "Foco ejecutivo", value: "360°", detail: "margen, conversión y experiencia" },
  { label: "Especialización", value: "AI", detail: "automatización aplicada a negocio" },
];

export const businessCases = [
  {
    title: "Dashboard Ejecutivo Inverfin",
    problem: "La información comercial estaba distribuida en múltiples fuentes y demoraba la lectura ejecutiva.",
    action: "Centralicé KPIs de ventas, margen, conversión y operación en tableros accionables.",
    result: "La dirección pudo priorizar decisiones con una lectura más clara de rentabilidad y performance.",
    metric: "BI para decisiones",
  },
  {
    title: "Automatización IA WhatsApp",
    problem: "Las consultas visuales y operativas consumían tiempo manual y generaban fricción en atención.",
    action: "Diseñé una arquitectura AI Native para clasificar imágenes, ordenar consultas y conectar activos en AWS S3.",
    result: "Se definió una base escalable para responder más rápido, reducir tareas repetitivas y mejorar trazabilidad.",
    metric: "IA operacional",
  },
  {
    title: "Fortis Ecommerce",
    problem: "El canal necesitaba ordenar catálogo, procesos, medición y operación para crecer de forma rentable.",
    action: "Gestioné prioridades ecommerce conectando pricing, experiencia, performance y rutina comercial.",
    result: "El ecommerce pasó a operar con mayor criterio estratégico y control de variables de crecimiento.",
    metric: "Growth rentable",
  },
];

export const architectureDiagrams = [
  {
    title: "BI Commerce Loop",
    nodes: ["Ventas", "Analytics", "Margen", "Dashboard", "Decisión"],
  },
  {
    title: "AI Ops Flow",
    nodes: ["WhatsApp", "Clasificación IA", "AWS S3", "Reglas", "Respuesta"],
  },
  {
    title: "Digital Platform",
    nodes: ["Frontend", "API", "PostgreSQL", "Prisma", "Gestión"],
  },
];

export const projectShots = [
  { title: "Executive KPI Board", type: "BI", caption: "Vista conceptual de indicadores para ventas, margen y conversión." },
  { title: "AI Triage Console", type: "AI", caption: "Captura conceptual de clasificación automática de consultas e imágenes." },
  { title: "Partner Ops Portal", type: "Ops", caption: "Mockup de plataforma para gestión de socios, estados y procesos." },
];

export const professionalEvolution = [
  { year: "2017", stage: "Base comercial", focus: "Cliente, operación y procesos en Casa Paraná." },
  { year: "2019", stage: "Transformación digital", focus: "Adopción de herramientas y orden operativo en Teo S.A." },
  { year: "2021", stage: "Ecommerce management", focus: "Gestión estratégica y operacional en Fortis Mayorista." },
  { year: "2023", stage: "BI + AI Operations", focus: "Dashboards, automatización e inteligencia aplicada en Inverfin." },
  { year: "Hoy", stage: "Ecommerce Strategy & AI Ops", focus: "Consultoría para conectar crecimiento, rentabilidad e IA." },
];

export const personalMetrics = [
  { label: "Ecommerce Management", value: 92 },
  { label: "Business Intelligence", value: 86 },
  { label: "AI Operations", value: 84 },
  { label: "Digital Growth", value: 88 },
  { label: "Project Leadership", value: 82 },
];

export const experience = [
  {
    company: "Inverfin",
    role: "Ecommerce & BI Operations",
    period: "2023 — Actualidad",
    results: [
      "Centralización de indicadores comerciales para acelerar decisiones ejecutivas.",
      "Optimización de lectura de margen, conversión, demanda y performance digital.",
      "Coordinación entre negocio, operaciones y tecnología para escalar canales digitales.",
    ],
  },
  {
    company: "Fortis Mayorista",
    role: "Ecommerce Manager",
    period: "2021 — 2023",
    results: [
      "Gestión integral del canal ecommerce con foco en crecimiento rentable.",
      "Mejora de procesos comerciales, catálogo, pricing y experiencia de compra.",
      "Implementación de rutinas de medición para performance y conversión.",
    ],
  },
  {
    company: "Teo S.A.",
    role: "Digital Growth & Operations",
    period: "2019 — 2021",
    results: [
      "Acompañamiento en transformación digital y adopción de herramientas de gestión.",
      "Diseño de procesos para ordenar ventas, información y seguimiento operativo.",
      "Impulso de iniciativas digitales conectadas con objetivos comerciales.",
    ],
  },
  {
    company: "Casa Paraná",
    role: "Comercial & Digital Operations",
    period: "2017 — 2019",
    results: [
      "Base operativa en comercio, atención, procesos y comportamiento del cliente.",
      "Participación en mejoras de experiencia comercial y eficiencia interna.",
      "Desarrollo de criterio de negocio aplicado a venta minorista y canales digitales.",
    ],
  },
];

export const projects = [
  {
    title: "Dashboard Ejecutivo Inverfin",
    description: "Centralización de KPIs para toma de decisiones sobre ventas, margen, performance y operación.",
    stack: ["Excel", "Analytics", "BI"],
    icon: BarChart3,
  },
  {
    title: "Automatización IA WhatsApp",
    description: "Arquitectura para clasificación automática de imágenes, consultas y flujos de respuesta asistidos por IA.",
    stack: ["AI", "AWS S3", "Automatización"],
    icon: Bot,
  },
  {
    title: "Cooperativa Vida y Luz",
    description: "Arquitectura digital integral para gestión de socios, procesos administrativos y trazabilidad operativa.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    icon: Workflow,
  },
  {
    title: "Fortis Ecommerce",
    description: "Gestión estratégica y operacional del canal ecommerce para fortalecer crecimiento, catálogo y conversión.",
    stack: ["Ecommerce", "Growth", "Operaciones"],
    icon: BriefcaseBusiness,
  },
];

export const stack = ["Shopify", "Google Analytics", "Google Ads", "Tag Manager", "Looker Studio", "Claude", "ChatGPT", "GitHub", "JavaScript", "HTML", "CSS"];

export const pillars = [
  { label: "Ecommerce Management", icon: Rocket, level: "Senior" },
  { label: "Business Intelligence", icon: LineChart, level: "Advanced" },
  { label: "AI Operations", icon: Bot, level: "Native" },
  { label: "Automatización", icon: Workflow, level: "Systems" },
  { label: "Digital Growth", icon: TrendingUp, level: "Strategy" },
  { label: "Project Leadership", icon: ShieldCheck, level: "Execution" },
];
