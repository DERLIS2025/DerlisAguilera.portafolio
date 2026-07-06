import { ArrowRight, CheckCircle2, ExternalLink, Mail, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { architectureDiagrams, businessCases, experience, kpiImpact, personalMetrics, pillars, professionalEvolution, projectShots, projects, stack } from "@/lib/content";

const contacts = [
  { label: "Email", value: "derlis.aguilera@email.com", href: "mailto:derlis.aguilera@email.com" },
  { label: "LinkedIn", value: "linkedin.com/in/derlisaguilera", href: "https://www.linkedin.com/in/derlisaguilera" },
  { label: "GitHub", value: "github.com/DerlisAguilera", href: "https://github.com/DerlisAguilera" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navegación principal">
        <a href="#inicio" className="brand">DA</a>
        <div className="nav-links">
          <a href="#impacto">Impacto</a>
          <a href="#casos">Casos</a>
          <a href="#metricas">Métricas</a>
          <a href="#contacto">Consultoría</a>
        </div>
      </nav>

      <section id="inicio" className="hero section-shell">
        <ScrollReveal className="hero-copy">
          <div className="badge"><Sparkles size={16} /> Ecommerce Strategy & AI Operations Specialist</div>
          <h1>Derlis Aguilera</h1>
          <p className="hero-subtitle">Negocio.<br />Ecommerce.<br />Inteligencia Artificial.</p>
          <p className="hero-description">Ayudo a equipos comerciales a convertir datos, automatización e IA en crecimiento rentable, mejores decisiones y operaciones ecommerce más escalables.</p>
          <div className="hero-actions">
            <a className="button primary" href="#casos">Ver casos de negocio <ArrowRight size={18} /></a>
            <a className="button secondary" href="#contacto">Solicitar consultoría</a>
          </div>
        </ScrollReveal>
        <ScrollReveal className="hero-card command-center" delay={0.12}>
          <div className="dashboard-topline"><span>60 sec recruiter view</span><strong>Business + Ecommerce + AI</strong></div>
          <div className="signal-ring"><span>DA</span></div>
          <div className="metric-grid">
            {kpiImpact.slice(0, 3).map((kpi) => <div key={kpi.label}><strong>{kpi.value}</strong><span>{kpi.label}</span></div>)}
          </div>
        </ScrollReveal>
      </section>

      <section className="section-shell impact" id="impacto">
        <ScrollReveal>
          <SectionHeading eyebrow="KPI Impact" title="Un perfil medido por resultados, no por una lista de tareas.">
            Lectura ejecutiva de ecommerce: margen, conversión, experiencia, automatización y rentabilidad antes que métricas aisladas.
          </SectionHeading>
        </ScrollReveal>
        <div className="impact-grid">
          {kpiImpact.map((kpi, index) => (
            <ScrollReveal className="impact-card" key={kpi.label} delay={index * 0.04}>
              <strong>{kpi.value}</strong>
              <span>{kpi.label}</span>
              <p>{kpi.detail}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell about" id="sobre-mi">
        <ScrollReveal>
          <SectionHeading eyebrow="Sobre mí" title="Conecto estrategia comercial, tecnología y operación digital.">
            Más de seis años trabajando con empresas como Inverfin, Fortis Mayorista, Teo S.A. y Casa Paraná, transformando datos, procesos y canales digitales en decisiones de negocio más claras.
          </SectionHeading>
        </ScrollReveal>
        <div className="pillars">
          {pillars.map((pillar, index) => (
            <ScrollReveal className="pillar" key={pillar.label} delay={index * 0.04}>
              <pillar.icon size={22} />
              <span>{pillar.label}</span>
              <small>{pillar.level}</small>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell" id="casos">
        <ScrollReveal>
          <SectionHeading eyebrow="Casos de negocio" title="Problema → Acción → Resultado." />
        </ScrollReveal>
        <div className="case-grid">
          {businessCases.map((item, index) => (
            <ScrollReveal className="case-card" key={item.title} delay={index * 0.05}>
              <div className="case-header"><h3>{item.title}</h3><span>{item.metric}</span></div>
              <div className="par-flow">
                <article><b>Problema</b><p>{item.problem}</p></article>
                <article><b>Acción</b><p>{item.action}</p></article>
                <article><b>Resultado</b><p>{item.result}</p></article>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell ai-native" id="ai-native">
        <ScrollReveal>
          <span>AI Native</span>
          <h2>La IA no como tendencia, sino como capa operativa.</h2>
          <p>Diseño flujos donde IA, automatización, datos y criterio comercial trabajan juntos: clasificación de consultas, priorización, respuestas asistidas, tableros ejecutivos y reducción de tareas repetitivas.</p>
        </ScrollReveal>
      </section>

      <section className="section-shell" id="arquitectura">
        <ScrollReveal>
          <SectionHeading eyebrow="Diagramas de arquitectura" title="Sistemas pensados para que negocio y tecnología hablen el mismo idioma." />
        </ScrollReveal>
        <div className="architecture-grid">
          {architectureDiagrams.map((diagram, index) => (
            <ScrollReveal className="architecture-card" key={diagram.title} delay={index * 0.05}>
              <h3>{diagram.title}</h3>
              <div className="node-flow">
                {diagram.nodes.map((node) => <span key={node}>{node}</span>)}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell" id="capturas">
        <ScrollReveal>
          <SectionHeading eyebrow="Capturas de proyectos" title="Mockups ejecutivos para explicar valor, flujo y adopción." />
        </ScrollReveal>
        <div className="shot-grid">
          {projectShots.map((shot, index) => (
            <ScrollReveal className="shot-card" key={shot.title} delay={index * 0.05}>
              <div className="shot-window">
                <div className="window-dots"><span /><span /><span /></div>
                <strong>{shot.type}</strong>
                <div className="fake-chart"><i /><i /><i /><i /></div>
              </div>
              <h3>{shot.title}</h3>
              <p>{shot.caption}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell" id="evolucion">
        <ScrollReveal>
          <SectionHeading eyebrow="Evolución profesional" title="De operación comercial a estrategia ecommerce con IA aplicada." />
        </ScrollReveal>
        <div className="evolution-track">
          {professionalEvolution.map((item, index) => (
            <ScrollReveal className="evolution-item" key={item.year} delay={index * 0.04}>
              <strong>{item.year}</strong>
              <h3>{item.stage}</h3>
              <p>{item.focus}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell metrics-dashboard" id="metricas">
        <ScrollReveal>
          <SectionHeading eyebrow="Dashboard personal" title="Indicadores visuales de experiencia y especialización." />
        </ScrollReveal>
        <ScrollReveal className="dashboard-panel">
          {personalMetrics.map((metric) => (
            <div className="metric-row" key={metric.label}>
              <div><span>{metric.label}</span><strong>{metric.value}%</strong></div>
              <progress value={metric.value} max="100">{metric.value}%</progress>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="section-shell" id="experiencia">
        <ScrollReveal>
          <SectionHeading eyebrow="Experiencia" title="Resultados logrados en entornos reales de ecommerce y operación." />
        </ScrollReveal>
        <div className="timeline">
          {experience.map((item, index) => (
            <ScrollReveal className="timeline-item" key={item.company} delay={index * 0.05}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span>{item.period}</span>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
                <ul>{item.results.map((result) => <li key={result}><CheckCircle2 size={16} />{result}</li>)}</ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell" id="proyectos">
        <ScrollReveal>
          <SectionHeading eyebrow="Proyectos destacados" title="Iniciativas que convierten información y automatización en crecimiento." />
        </ScrollReveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ScrollReveal className="project-card" key={project.title} delay={index * 0.05}>
              <project.icon size={24} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell stack-section" id="stack">
        <ScrollReveal>
          <SectionHeading eyebrow="Stack" title="Herramientas para medir, operar, automatizar y escalar." />
        </ScrollReveal>
        <ScrollReveal className="stack-cloud">
          {stack.map((tool) => <span key={tool}>{tool}</span>)}
        </ScrollReveal>
      </section>

      <section className="section-shell philosophy" id="filosofia">
        <ScrollReveal>
          <span>Filosofía</span>
          <h2>Cómo entiendo el crecimiento digital</h2>
          <p>No miro solamente ROAS. Analizo margen, conversión, experiencia de usuario, automatización y rentabilidad.</p>
        </ScrollReveal>
      </section>

      <section className="section-shell contact" id="contacto">
        <ScrollReveal>
          <SectionHeading eyebrow="CTA consultoría" title="Si tu ecommerce necesita más claridad, automatización e IA, conversemos." />
          <p className="contact-lead">Trabajo con equipos que quieren ordenar su canal digital, medir mejor, automatizar procesos y usar IA para operar con más velocidad y rentabilidad.</p>
          <div className="contact-list">
            {contacts.map((contact) => (
              <a href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span>{contact.label}</span>{contact.value}<ExternalLink size={16} />
              </a>
            ))}
          </div>
          <a className="button primary contact-button" href="mailto:derlis.aguilera@email.com"><Mail size={18} /> Trabajemos en ecommerce, IA y growth</a>
        </ScrollReveal>
      </section>
    </main>
  );
}
