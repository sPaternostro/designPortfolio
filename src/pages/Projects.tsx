import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useReveal from '../hooks/useReveal';
import SEO from '../components/SEO';

const PROJECTS = [
  { key: 'gamingcity',            link: '/projects/gamingcity',             published: true },
  { key: 'kiro',                  link: '/projects/kiro',                   published: true },
  { key: 'incident',              link: '/projects/incident-standardization',published: true },
  { key: 'accesoriosjorge',       link: '/projects/accesoriosjorge',        published: true },
  { key: 'biotec',                link: '/projects/biotec',                 published: true },
  { key: 'bhb2b',                 link: '/projects/bhb2b',                  published: true },
  { key: 'bombas',                link: '/projects/bombas',                 published: true },
  { key: 'comafer',               link: '/projects/comafer',                published: true },
  { key: 'fjg',                   link: '/projects/fjg',                    published: true },
  { key: 'netegia',               link: '/projects/netegia',                published: true },
  { key: 'zafirofarm',            link: '/projects/zafirofarm',             published: true },
  { key: 'otraronda', link: '/projects/otraronda', published: true },
];

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
            {PROJECTS.map(({ key, link, published }) => (
              <article
                key={key}
                className={`glass-card project-card ${!published ? 'project-card-soon' : ''}`}
              >
                {!published && (
                  <div className="project-soon-badge">
                    <span>Coming soon</span>
                  </div>
                )}

                <div className="card-content">
                  <header>
                    <div className="card-tags-group">
                      <span className="card-tag">{t(`${key}.category`, { defaultValue: '' }).split('•')[0]?.trim()}</span>
                      {t(`${key}.category`, { defaultValue: '' }).includes('•') && (
                        <>
                          <span className="card-tag-separator">•</span>
                          <span className="card-tag-highlight">{t(`${key}.category`, { defaultValue: '' }).split('•')[1]?.trim()}</span>
                        </>
                      )}
                    </div>
                    <h2 className="card-title-main">{t(`${key}.title`)}</h2>
                    <p className="text-secondary card-description">{t(`${key}.intro`)}</p>
                  </header>
                </div>

                <footer className="card-footer">
                  {published ? (
                    <Link to={link} className="btn btn-secondary btn-full">
                      {t('projects.readCase', 'Ver caso')}
                    </Link>
                  ) : (
                    <span className="btn btn-disabled btn-full" aria-disabled="true">
                      En proceso
                    </span>
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