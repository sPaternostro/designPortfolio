import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import ProfileHero from '../components/ProfileHero';
import { FEATURED_KEYS, findSite } from '../data/sites';

const CALENDLY_LINK = 'https://calendly.com/paternostro';
const CV = {
  es: '/cv/sebastian-paternostro-es.pdf',
  en: '/cv/sebastian-paternostro-en.pdf',
};

export default function Hire() {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language.startsWith('es');
  const primaryCv = isEs ? CV.es : CV.en;
  const secondaryCv = isEs ? CV.en : CV.es;
  const skills = t('hire.skills', { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t('hire.seoTitle')}
        description={t('hire.seoDesc')}
        path="/hire"
      />

      <main className="container hire-page">
        <section className="hire-hero section-spacer">
          <ProfileHero
            actions={
              <>
                <a href={primaryCv} className="btn btn-primary" download>
                  {t(isEs ? 'hire.downloadCVEs' : 'hire.downloadCVEn')}
                </a>
                <a href={secondaryCv} className="btn btn-secondary" download>
                  {t(isEs ? 'hire.downloadCVEn' : 'hire.downloadCVEs')}
                </a>
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  {t('hire.bookCall')}
                </a>
              </>
            }
          />
        </section>

        <section className="hire-section">
          <h2 className="hire-section-title">{t('hire.whatIDo')}</h2>
          <div className="hire-what-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="hire-what-item glass-card">
                <p className="hire-step">0{n}</p>
                <h3 className="hire-what-title">{t(`hire.card${n}Title`)}</h3>
                <p className="hire-what-desc">{t(`hire.card${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="hire-section">
          <h2 className="hire-section-title">{t('hire.selectedWork')}</h2>
          <div className="hire-cases">
            {FEATURED_KEYS.map((id, i) => {
              const site = findSite(id);
              const n = i + 1;
              if (!site) return null;
              return (
                <article key={id} className="hire-case glass-card">
                  {site.logo && (
                    <div className="hire-case-logo">
                      <img src={site.logo} alt="" />
                    </div>
                  )}
                  <div className="hire-case-body">
                    <div className="hire-case-header">
                      <h3 className="hire-case-title">{t(`hire.case${n}Title`)}</h3>
                      <span className="card-tag">{t(`hire.case${n}Tag`)}</span>
                    </div>
                    <p className="hire-case-summary">{t(`hire.case${n}Summary`)}</p>
                    <div className="hire-case-actions">
                      <Link to={site.to} className="btn btn-primary">{t('hire.readCase')}</Link>
                      {site.live && (
                        <a href={site.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                          {t('hire.viewLive')}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="hire-section">
          <h2 className="hire-section-title">{t('hire.aboutTitle')}</h2>
          <div className="hire-about glass-card">
            {[1, 2, 3].map((n) => (
              <p key={n} className={n > 1 ? 'hire-about-next' : undefined}>
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
            <a href="mailto:sebastian.paternostro@gmail.com" className="hire-link">
              sebastian.paternostro@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/spaternostro99/" target="_blank" rel="noopener noreferrer" className="hire-link">
              LinkedIn
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
