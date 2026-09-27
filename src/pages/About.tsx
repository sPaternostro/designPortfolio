import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import SEO from '../components/SEO';

const CV = {
  es: '/cv/sebastian-paternostro-es.pdf',
  en: '/cv/sebastian-paternostro-en.pdf',
};

export default function About() {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language.startsWith('es');
  useReveal();

  return (
    <>
      <SEO
        title={t('about.title')}
        description={t('about.description')}
        path="/about"
      />
      <div className="container">
        <section className="reveal section-spacer about-intro">
          <h1 className="text-gradient home-hero-title">
            {t('about.title')}
          </h1>
          <p className="text-secondary about-description">
            {t('about.description')}
          </p>

          {/* CV Download */}
          <div className="about-cv-links">
            <a href={isEs ? CV.es : CV.en} className="btn btn-primary" download>
              {t(isEs ? 'hire.downloadCVEs' : 'hire.downloadCVEn')}
            </a>
            <a href={isEs ? CV.en : CV.es} className="btn btn-secondary" download>
              {t(isEs ? 'hire.downloadCVEn' : 'hire.downloadCVEs')}
            </a>
          </div>
        </section>

        <section className="reveal">
          <h2 className="text-gradient about-principles-heading">
            {t('about.principlesTitle')}
          </h2>
          <div className="home-grid">
            <article className="glass-card">
              <p className="card-tag">01</p>
              <h3 className="card-title-main">{t('about.principles.root')}</h3>
              <p className="text-secondary">{t('about.principles.rootDesc')}</p>
            </article>
            <article className="glass-card">
              <p className="card-tag">02</p>
              <h3 className="card-title-main">{t('about.principles.thinking')}</h3>
              <p className="text-secondary">{t('about.principles.thinkingDesc')}</p>
            </article>
            <article className="glass-card">
              <p className="card-tag">03</p>
              <h3 className="card-title-main">{t('about.principles.business')}</h3>
              <p className="text-secondary">{t('about.principles.businessDesc')}</p>
            </article>
            <article className="glass-card">
              <p className="card-tag">04</p>
              <h3 className="card-title-main">{t('about.principles.collaboration')}</h3>
              <p className="text-secondary">{t('about.principles.collaborationDesc')}</p>
            </article>
          </div>
        </section>

        <section className="reveal section-spacer about-cta">
          <div className="glass-card about-cta-card">
            <h2 className="text-gradient about-cta-title">
              {t('about.ctaTitle', '¿Trabajamos juntos?')}
            </h2>
            <p className="text-secondary about-cta-text">
              {t('about.ctaText', 'Si buscás estructura, claridad y foco en resultados, podemos hacer un gran equipo.')}
            </p>
            <div className="about-cta-actions">
              <Link to="/projects" className="btn btn-primary">
                {t('about.ctaProjects', 'Ver proyectos')}
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t('about.ctaContact', 'Contactame')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}