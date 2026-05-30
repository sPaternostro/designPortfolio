import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const CV_LINK = 'https://drive.google.com/drive/folders/1kupIQ87pj4JWaQSYbLx0xLsTbIOi96gL?usp=sharing';
const CALENDLY_LINK = 'https://calendly.com/paternostro';

const CASE_LINKS = [
  { id: 'gamingcity', to: '/projects/gamingcity' },
  { id: 'kiro',      to: '/projects/kiro' },
  { id: 'incident',  to: '/projects/incident-standardization' },
];

export default function Hire() {
  const { t } = useTranslation();

  const skills = t('hire.skills', { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t('hire.seoTitle', 'Available for Work — Sebastián Paternostro')}
        description={t('hire.seoDesc', 'Ecommerce UX/UI Designer & Project Owner available for remote work.')}
        path="/hire"
      />

      <main className="container hire-page">

        <section className="hire-header section-spacer">
          <div className="hire-header-meta">
            <span className="hire-available-badge">
              <span className="hire-available-dot" />
              {t('hire.badge')}
            </span>
            <p className="hire-updated">{t('hire.markets')}</p>
          </div>

          <h1 className="text-gradient hire-name">Sebastián Paternostro</h1>
          <p className="hire-role">{t('hire.role')}</p>
          <p className="text-secondary hire-tagline">{t('hire.tagline')}</p>
          <p className="text-secondary hire-tagline-sub">{t('hire.taglineSub')}</p>

          <div className="hire-actions">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {t('hire.bookCall')}
            </a>
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round"/>
              </svg>
              {t('hire.downloadCV')}
            </a>
            <Link to="/contact" className="btn btn-secondary">
              {t('hire.moreOptions')}
            </Link>
          </div>
        </section>

        <section className="hire-section">
          <h2 className="hire-section-title">{t('hire.whatIDo')}</h2>
          <div className="hire-what-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="hire-what-item glass-card">
                <h3 className="hire-what-title">{t(`hire.card${n}Title`)}</h3>
                <p className="text-secondary hire-what-desc">{t(`hire.card${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="hire-section">
          <h2 className="hire-section-title">{t('hire.selectedWork')}</h2>
          <div className="hire-cases">
            {CASE_LINKS.map(({ id, to }, i) => {
              const n = i + 1;
              return (
                <div key={id} className="hire-case glass-card">
                  <div className="hire-case-header">
                    <span className="card-tag">{t(`hire.case${n}Tag`)}</span>
                    <h3 className="hire-case-title">{t(`hire.case${n}Title`)}</h3>
                  </div>
                  <p className="text-secondary hire-case-summary">{t(`hire.case${n}Summary`)}</p>
                  <Link to={to} className="hire-case-link">{t('hire.readCase')}</Link>
                </div>
              );
            })}
          </div>
        </section>

        <section className="hire-section">
          <h2 className="hire-section-title">{t('hire.aboutTitle')}</h2>
          <div className="hire-about glass-card">
            {[1, 2, 3].map((n) => (
              <p
                key={n}
                className="text-secondary"
                style={n > 1 ? { marginTop: '1rem' } : undefined}
              >
                {t(`hire.about${n}`)}
              </p>
            ))}
          </div>
        </section>

        <section className="hire-section">
          <h2 className="hire-section-title">{t('hire.skillsTitle')}</h2>
          <div className="hire-skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="hire-skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        <section className="hire-section hire-links-section">
          <h2 className="hire-section-title">{t('hire.linksTitle')}</h2>
          <div className="hire-links">
            <a href="https://www.linkedin.com/in/spaternostro99/" target="_blank" rel="noopener noreferrer" className="hire-link">
              LinkedIn ↗
            </a>
            <a href="https://github.com/sPaternostro" target="_blank" rel="noopener noreferrer" className="hire-link">
              GitHub ↗
            </a>
            <Link to="/projects" className="hire-link">
              {t('hire.portfolio')}
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}