import { ArrowRight, CheckCircle2, ExternalLink, Mail, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience, pillars, projects, stack } from "@/lib/content";

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
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section id="inicio" className="hero section-shell">
        <ScrollReveal className="hero-copy">
          <div className="badge"><Sparkles size={16} /> Ecommerce Strategy & AI Operations Specialist</div>
          <h1>Derlis Aguilera</h1>
          <p className="hero-subtitle">Ecommerce Strategy<br />AI Operations<br />Digital Growth</p>
          <p className="hero-description">Ayudo a empresas a escalar ecommerce mediante estrategia, automatización e inteligencia artificial.</p>
          <div className="hero-actions">
            <a className="button primary" href="#proyectos">Ver Proyectos <ArrowRight size={18} /></a>
            <a className="button secondary" href="#contacto">Contactar</a>
          </div>
        </ScrollReveal>
        <ScrollReveal className="hero-card" delay={0.12}>
          <div className="portrait" aria-label="Foto profesional opcional"><span>DA</span></div>
          <div className="metric-grid">
            <div><strong>+6</strong><span>años de experiencia</span></div>
            <div><strong>4</strong><span>empresas impulsadas</span></div>
            <div><strong>360°</strong><span>negocio + tecnología</span></div>
          </div>
        </ScrollReveal>
      </section>

      <section className="section-shell about" id="sobre-mi">
        <ScrollReveal>
          <SectionHeading eyebrow="Sobre mí" title="Conecto estrategia comercial, tecnología y operación digital.">
            Más de seis años trabajando con empresas como Inverfin, Fortis Mayorista, Teo S.A. y Casa Paraná, transformando datos, procesos y canales digitales en decisiones de negocio más claras.
          </SectionHeading>
        </ScrollReveal>
        <div className="pillars">
          {pillars.map((pillar, index) => (
            <ScrollReveal className="pillar" key={pillar.label} delay={index * 0.06}>
              <pillar.icon size={22} />
              <span>{pillar.label}</span>
            </ScrollReveal>
          ))}
        </div>
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
          <SectionHeading eyebrow="Contacto" title="Construyamos un sistema digital más rentable y escalable." />
          <div className="contact-list">
            {contacts.map((contact) => (
              <a href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span>{contact.label}</span>{contact.value}<ExternalLink size={16} />
              </a>
            ))}
          </div>
          <a className="button primary contact-button" href="mailto:derlis.aguilera@email.com"><Mail size={18} /> Trabajemos juntos</a>
        </ScrollReveal>
      </section>
    </main>
  );
}
