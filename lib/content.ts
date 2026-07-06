import { BarChart3, Bot, BriefcaseBusiness, LineChart, Rocket, Workflow } from "lucide-react";

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

export const stack = [
  "Shopify",
  "Google Analytics",
  "Google Ads",
  "Tag Manager",
  "Looker Studio",
  "Claude",
  "ChatGPT",
  "GitHub",
  "JavaScript",
  "HTML",
  "CSS",
];

export const pillars = [
  { label: "Ecommerce Management", icon: Rocket },
  { label: "Business Intelligence", icon: LineChart },
  { label: "AI Operations", icon: Bot },
  { label: "Automatización", icon: Workflow },
];
