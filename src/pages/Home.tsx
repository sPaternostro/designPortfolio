import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import ProfileHero from '../components/ProfileHero';
import { findSite } from '../data/sites';

const HIGHLIGHTS = [
  { key: 'gamingcity', tag1Key: 'home.highlight1Tag1', tag2Key: 'home.highlight1Tag2', titleKey: 'home.highlight1Title', descKey: 'home.highlight1Desc' },
  { key: 'accesoriosjorge', tag1Key: 'home.highlight2Tag1', tag2Key: 'home.highlight2Tag2', titleKey: 'home.highlight2Title', descKey: 'home.highlight2Desc' },
  { key: 'otraronda', tag1Key: 'home.highlight3Tag1', tag2Key: 'home.highlight3Tag2', titleKey: 'home.highlight3Title', descKey: 'home.highlight3Desc' },
  { key: 'biotec', tag1Key: 'home.highlight4Tag1', tag2Key: 'home.highlight4Tag2', titleKey: 'home.highlight4Title', descKey: 'home.highlight4Desc' },
];

export default function Home() {
  const { t } = useTranslation();
  const skills = t('home.skills', { returnObjects: true }) as string[];

  return (
    <>
      <SEO path="/" />
      <div className="container">

        <section className="section-spacer hero-about-section">
          <ProfileHero
            actions={
              <>
                <Link to="/hire" className="btn btn-primary">{t('home.hire')}</Link>
                <Link to="/projects" className="btn btn-secondary">{t('home.viewWork')}</Link>
                <Link to="/contact" className="btn btn-secondary">{t('navbar.contact')}</Link>
              </>
            }
          />
        </section>

        <section className="section-spacer work-section">
          <h2 className="section-title text-gradient work-section-heading">
            {t('home.howTitle')}
          </h2>
          <p className="text-secondary section-lead">
            {t('hire.whatIDoLead')}
          </p>
          <div className="work-grid">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="glass-card work-card">
                <p className="hire-step">0{n}</p>
                <h3 className="work-card-title">{t(`hire.card${n}Title`)}</h3>
                <p className="work-card-desc">{t(`hire.card${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-spacer">
          <h2 className="section-title text-gradient">{t('home.techTitle')}</h2>
          <div className="hire-skills-grid home-skills">
            {skills.map((skill) => (
              <span key={skill} className="hire-skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        <section className="section-spacer">
          <h2 className="section-title text-gradient">{t('home.highlights')}</h2>
          <div className="home-grid">
            {HIGHLIGHTS.map((h) => {
              const site = findSite(h.key);
              return (
                <article key={h.key} className="glass-card project-card has-thumb">
                  {site?.image && (
                    <Link to={site.to} className="project-thumb" tabIndex={-1} aria-hidden="true">
                      <img src={site.image} alt="" />
                    </Link>
                  )}
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
                  <footer className="project-card-footer card-footer-row">
                    <Link to={site?.to || '/projects'} className="btn btn-primary">
                      {t('hire.readCase')}
                    </Link>
                    {site?.live && (
                      <a href={site.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        {t('hire.viewLive')}
                      </a>
                    )}
                  </footer>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-spacer">
          <div className="highlight-quote glass-card">
            <blockquote>
              <p className="quote-text">"{t('home.philosophy')}"</p>
            </blockquote>
          </div>
        </section>

        <section className="section-spacer cta-section">
          <h3 className="cta-title text-gradient">{t('home.ctaTitle')}</h3>
          <Link to="/hire" className="btn btn-primary">{t('home.ctaButton')}</Link>
        </section>

      </div>
    </>
  );
}
