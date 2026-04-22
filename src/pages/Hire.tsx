import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const WA_NUMBER = '541173857303';
const WA_MESSAGE = encodeURIComponent("Hi Sebastián, I saw your portfolio and I'd like to talk.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const CV_LINK = 'https://drive.google.com/drive/folders/1kupIQ87pj4JWaQSYbLx0xLsTbIOi96gL?usp=sharing';

const CASES = [
  {
    id: 'gamingcity',
    tag: 'Ecommerce UX · Migration',
    title: 'GamingCity',
    summary:
      'Led the full migration from a marketplace store to an independent ecommerce platform. Responsible for information architecture, component design, and cross-team collaboration with development. Focus on product discovery, brand clarity, and scalable structure.',
    to: '/projects/gamingcity',
  },
  {
    id: 'kiro',
    tag: 'Ecommerce · TiendaNube',
    title: 'KIRO Store',
    summary:
      'Built a complete ecommerce experience from scratch within platform constraints. Prioritized conversion-oriented UX: clear hierarchy, reduced friction in the purchase flow, and scalable navigation — without custom code.',
    to: '/projects/kiro',
  },
  {
    id: 'incident-standardization',
    tag: 'Process Design · Cross-team',
    title: 'Incident Standardization',
    summary:
      'Identified and solved a recurring operational problem without formal assignment. Designed and implemented a structured incident reporting format that reduced communication loops and accelerated resolution cycles across Support, Design, and Development teams.',
    to: '/projects/incident-standardization',
  },
];

const SKILLS = [
  'Ecommerce UX',
  'Conversion Optimization',
  'Landing Page Design',
  'Information Architecture',
  'Product Thinking',
  'Project Management',
  'Figma',
  'React',
  'Design Systems',
  'Cross-team Collaboration',
  'Customer Experience',
  'Structured Problem Solving',
];

export default function Hire() {
  return (
    <>
      <SEO
        title="Available for Work — Sebastián Paternostro"
        description="Ecommerce & conversion-focused Web Designer available for remote work. I help businesses sell better through clear structure, sharp UX, and business-aligned design decisions."
        path="/hire"
      />

      <main className="container hire-page">

        {/* HEADER */}
        <section className="hire-header section-spacer">
          <div className="hire-header-meta">
            <span className="hire-available-badge">
              <span className="hire-available-dot" />
              Available for remote work
            </span>
            <p className="hire-updated">Japan - Europe - United States</p>
          </div>

          <h1 className="text-gradient hire-name">Sebastián Paternostro</h1>
          <p className="hire-role">Ecommerce & Conversion Designer · Project Manager </p>

          <p className="text-secondary hire-tagline">
            I design ecommerce experiences and landing pages that convert — not just look good.
            My focus is on business outcomes: clear structure, reduced friction, and design decisions
            that align with how customers actually buy.
          </p>

          <p className="text-secondary hire-tagline-sub">
            I work well with small teams, speak the language of business and development,
            and take ownership of problems without needing to be assigned to them.
          </p>

          <div className="hire-actions">
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" />
              </svg>
              Download CV
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Send a message
            </a>
            <a href="mailto:sebastian.paternostro@gmail.com" className="btn btn-secondary">
              sebastian.paternostro@gmail.com
            </a>
          </div>
        </section>

        {/* WHAT I DO */}
        <section className="hire-section">
          <h2 className="hire-section-title">What I do</h2>
          <div className="hire-what-grid">
            <div className="hire-what-item glass-card">
              <h3 className="hire-what-title">Ecommerce Design</h3>
              <p className="text-secondary hire-what-desc">
                I design online stores that guide users from discovery to purchase with minimum friction.
                Product pages, category structure, checkout flows, and campaign landing pages — all built
                around how customers actually navigate and decide.
              </p>
            </div>
            <div className="hire-what-item glass-card">
              <h3 className="hire-what-title">Conversion-focused UX</h3>
              <p className="text-secondary hire-what-desc">
                I question assumptions before adding elements. Every design decision I make is tied
                to a business goal: increase conversions, reduce drop-off, build trust, or simplify
                a process that creates friction.
              </p>
            </div>
            <div className="hire-what-item glass-card">
              <h3 className="hire-what-title">Project Management</h3>
              <p className="text-secondary hire-what-desc">
                I bridge design and development. I communicate clearly across teams, structure
                workflows, anticipate blockers, and make sure that what gets built is what was agreed.
                I take ownership of outcomes, not just deliverables.
              </p>
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="hire-section">
          <h2 className="hire-section-title">Selected work</h2>
          <div className="hire-cases">
            {CASES.map((c) => (
              <div key={c.id} className="hire-case glass-card">
                <div className="hire-case-header">
                  <span className="card-tag">{c.tag}</span>
                  <h3 className="hire-case-title">{c.title}</h3>
                </div>
                <p className="text-secondary hire-case-summary">{c.summary}</p>
                <Link to={c.to} className="hire-case-link">
                  Read full case →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="hire-section">
          <h2 className="hire-section-title">About me</h2>
          <div className="hire-about glass-card">
            <p className="text-secondary">
              Web designer from Buenos Aires with a strong focus on ecommerce, conversion,
              and business-aligned design. I don't design isolated screens — I design systems
              and flows that make businesses sell better and users trust faster.
            </p>
            <p className="text-secondary" style={{ marginTop: '1rem' }}>
              I have hands-on experience in real production environments, working alongside
              support, development, and business teams. I take initiative, communicate clearly,
              and deliver structured solutions that solve the actual problem — not just the visible one.
            </p>
            <p className="text-secondary" style={{ marginTop: '1rem' }}>
              Looking for remote opportunities where design has real impact on business outcomes.
              Open to full-time roles, long-term freelance, and project-based work.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="hire-section">
          <h2 className="hire-section-title">Skills & Tools</h2>
          <div className="hire-skills-grid">
            {SKILLS.map((skill) => (
              <span key={skill} className="hire-skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* LINKS */}
        <section className="hire-section hire-links-section">
          <div className="hire-links">
            <a href="https://www.linkedin.com/in/spaternostro99/" target="_blank" rel="noopener noreferrer" className="hire-link">
              LinkedIn ↗
            </a>
            <a href="https://github.com/sPaternostro" target="_blank" rel="noopener noreferrer" className="hire-link">
              GitHub ↗
            </a>
            <Link to="/projects" className="hire-link">
              Full portfolio ↗
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}