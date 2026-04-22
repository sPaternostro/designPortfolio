import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const STACK_GROUPS = [
  {
    key: 'design',
    labelKey: 'home.stackDesign',
    items: [
      { name: 'Figma',          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg> },
      { name: 'Photoshop',      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 17V7h3.5a3 3 0 0 1 0 6H7"/></svg> },
      { name: 'Prototyping',    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
      { name: 'Design Systems', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
    ],
  },
  {
    key: 'web',
    labelKey: 'home.stackWeb',
    items: [
      { name: 'HTML & CSS',   icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z"/><path d="M8 8h8l-.5 5-3.5 1-3.5-1-.25-2.5"/></svg> },
      { name: 'JavaScript',   icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 17c0 1.5 2.5 2 3.5.5M13 13v5c0 1.5 3 2 3-1"/></svg> },
      { name: 'React',        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg> },
      { name: 'PHP',          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M7 12h2.5a1.5 1.5 0 0 0 0-3H7v6M14 9l-1 6M14 9h2.5a1.5 1.5 0 0 1 0 3H14"/></svg> },
      { name: 'Responsive',   icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><rect x="1" y="6" width="6" height="10" rx="1"/></svg> },
    ],
  },
  {
    key: 'ops',
    labelKey: 'home.stackOps',
    items: [
      { name: 'Project Mgmt',     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
      { name: 'Redmine',          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
      { name: 'Slack',            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg> },
      { name: 'Team Management',  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
      { name: 'Customer Success', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.06 6.06l1.27-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
    ],
  },
];

// Casos destacados en Home — modificá este array para cambiarlos
const HIGHLIGHTS = [
  { key: 'gamingcity', tag1Key: 'home.highlight1Tag1', tag2Key: 'home.highlight1Tag2', titleKey: 'home.highlight1Title', descKey: 'home.highlight1Desc', link: '/projects/gamingcity' },
  { key: 'kiro',       tag1Key: 'home.highlight2Tag1', tag2Key: 'home.highlight2Tag2', titleKey: 'home.highlight2Title', descKey: 'home.highlight2Desc', link: '/projects/kiro' },
  { key: 'bhb2b',      tag1Key: 'home.highlight3Tag1', tag2Key: 'home.highlight3Tag2', titleKey: 'home.highlight3Title', descKey: 'home.highlight3Desc', link: '/projects/bhb2b' },
  { key: 'otraronda',  tag1Key: 'home.highlight4Tag1', tag2Key: 'home.highlight4Tag2', titleKey: 'home.highlight4Title', descKey: 'home.highlight4Desc', link: '/projects/otraronda' },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SEO path="/" />
      <div className="container">

        <section className="section-spacer hero-about-section">
          <div className="hero-card glass-card">
            <div className="hero-card-badge">{t('home.professionTag')}</div>
            <h1 className="text-gradient hero-card-name">{t('home.name')}</h1>
            <p className="text-secondary hero-card-bio">{t('home.shortBio')}</p>
            <div className="hero-card-actions">
              <Link to="/projects" className="btn btn-primary">{t('home.viewWork')}</Link>
              <Link to="/about" className="btn btn-secondary">{t('navbar.about')}</Link>
              <Link to="/contact" className="btn btn-secondary">{t('navbar.contact')}</Link>
            </div>
          </div>
        </section>

        <section className="section-spacer work-section">
          <h2 className="text-gradient section-title work-section-heading">
            {t('home.howTitle')}
          </h2>
          <p className="text-secondary work-section-subheading">
            {t('home.howSubtitle')}
          </p>
          <div className="work-grid">
            <div className="glass-card work-card">
              <div className="work-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/><path d="M2 17L12 22L22 17"/><path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h4 className="work-card-title">{t('home.howOneTitle')}</h4>
              <p className="text-secondary work-card-desc">{t('home.howOneDesc')}</p>
            </div>
            <div className="glass-card work-card">
              <div className="work-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"/><path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21"/>
                </svg>
              </div>
              <h4 className="work-card-title">{t('home.howTwoTitle')}</h4>
              <p className="text-secondary work-card-desc">{t('home.howTwoDesc')}</p>
            </div>
            <div className="glass-card work-card">
              <div className="work-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8V12L14 14"/><path d="M5 3L2 6"/><path d="M22 6L19 3"/>
                </svg>
              </div>
              <h4 className="work-card-title">{t('home.howThreeTitle')}</h4>
              <p className="text-secondary work-card-desc">{t('home.howThreeDesc')}</p>
            </div>
          </div>
        </section>

        <section className="section-spacer">
          <h2 className="text-gradient section-title">{t('home.techTitle')}</h2>
          <div className="stack-groups">
            {STACK_GROUPS.map((group) => (
              <div key={group.key} className="stack-group">
                <p className="stack-group-label">{t(group.labelKey)}</p>
                <div className="stack-group-items">
                  {group.items.map((item) => (
                    <div key={item.name} className="stack-item">
                      <span className="stack-item-icon">{item.icon}</span>
                      <span className="stack-item-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-spacer">
          <h2 className="text-gradient section-title">{t('home.highlights')}</h2>
          <div className="home-grid">
            {HIGHLIGHTS.map((h) => (
              <article key={h.key} className="glass-card project-card">
                <div className="card-content-wrapper">
                  <header>
                    <div className="card-tags-group">
                      <span className="card-tag">{t(h.tag1Key)}</span>
                      <span className="card-tag-separator">•</span>
                      <span className="card-tag-highlight">{t(h.tag2Key)}</span>
                    </div>
                    <h3 className="project-card-title">{t(h.titleKey)}</h3>
                    <p className="text-secondary">{t(h.descKey)}</p>
                  </header>
                </div>
                <footer className="project-card-footer">
                  <Link to={h.link} className="btn btn-secondary">
                    {t('home.readCase')}
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="section-spacer">
          <div className="highlight-quote glass-card">
            <blockquote>
              <p className="text-gradient quote-text">"{t('home.philosophy')}"</p>
            </blockquote>
          </div>
        </section>

        <section className="section-spacer cta-section">
          <h3 className="text-gradient cta-title">{t('home.ctaTitle')}</h3>
          <Link to="/contact" className="btn btn-primary">{t('home.ctaButton')}</Link>
        </section>

      </div>
    </>
  );
}