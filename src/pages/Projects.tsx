import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useReveal from '../hooks/useReveal';
import SEO from '../components/SEO';
import { SITES } from '../data/sites';

export default function Projects() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('projects.title')}
        description={t('projects.subtitle')}
        path="/projects"
      />
      <main className="container">
        <section className="reveal section-spacer">
          <h1 className="text-gradient page-title">{t('projects.title')}</h1>
          <p className="text-secondary page-subtitle">{t('projects.subtitle')}</p>
        </section>

        <section className="reveal projects-grid-layout">
          <div className="home-grid">
            {SITES.map((site) => (
              <article
                key={site.key}
                className={`glass-card project-card${site.image ? ' has-thumb' : ''}`}
              >
                {site.image && (
                  <Link to={site.to} className="project-thumb" tabIndex={-1} aria-hidden="true">
                    <img src={site.image} alt="" />
                  </Link>
                )}
                {site.demo && (
                  <div className="project-soon-badge">
                    <span>{t('projects.demo')}</span>
                  </div>
                )}

                <div className="card-content">
                  <header>
                    <div className="card-tags-group">
                      <span className="card-tag">{t(`${site.key}.category`, { defaultValue: '' }).split('•')[0]?.trim()}</span>
                      {t(`${site.key}.category`, { defaultValue: '' }).includes('•') && (
                        <>
                          <span className="card-tag-separator">•</span>
                          <span className="card-tag-highlight">{t(`${site.key}.category`, { defaultValue: '' }).split('•')[1]?.trim()}</span>
                        </>
                      )}
                    </div>
                    <h2 className="card-title-main">{t(`${site.key}.title`)}</h2>
                    <p className="text-secondary card-description">{t(`${site.key}.intro`)}</p>
                  </header>
                </div>

                <footer className="card-footer card-footer-row">
                  <Link to={site.to} className="btn btn-primary">
                    {t('hire.readCase')}
                  </Link>
                  {site.live && (
                    <a href={site.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      {t('hire.viewLive')}
                    </a>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}