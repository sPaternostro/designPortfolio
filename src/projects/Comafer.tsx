import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import SEO from '../components/SEO';

export default function Comafer() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('comafer.title')}
        description={t('comafer.intro')}
        path="/projects/comafer"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('comafer.category')}</p>
          <h1 className="case-title">{t('comafer.title')}</h1>
          <p className="case-intro">{t('comafer.intro')}</p>

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('comafer.meta.role')}</p>
              <p className="meta-value">{t('comafer.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('comafer.meta.timeline')}</p>
              <p className="meta-value">{t('comafer.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('comafer.meta.focus')}</p>
              <p className="meta-value">{t('comafer.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('comafer.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('comafer.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('comafer.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('comafer.overview.p1')}</p>
            <p>{t('comafer.overview.p2')}</p>
            <p>{t('comafer.overview.p3')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('comafer.challenge.title')}</h2>
          <div className="home-grid">
            <div className="glass-card">
              <h3>{t('comafer.challenge.c1title')}</h3>
              <p className="text-secondary">{t('comafer.challenge.c1desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('comafer.challenge.c2title')}</h3>
              <p className="text-secondary">{t('comafer.challenge.c2desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('comafer.challenge.c3title')}</h3>
              <p className="text-secondary">{t('comafer.challenge.c3desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('comafer.challenge.c4title')}</h3>
              <p className="text-secondary">{t('comafer.challenge.c4desc')}</p>
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('comafer.beforeAfter.title')}</h2>
          <p className="section-description">{t('comafer.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('comafer.beforeAfter.before')}</p>
              <BrowserFrame src="/images/comafer/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('comafer.beforeAfter.after')}</p>
              <BrowserFrame src="/images/comafer/despues1.png" />
            </div>
          </div>
        </section> */}

        <section className="reveal section-spacer">
          <h2>{t('comafer.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/comafer/despues2.png" />
            <BrowserFrame src="/images/comafer/despues3.png" />
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('comafer.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('comafer.outcome.p1')}</p>
            <p>{t('comafer.outcome.p2')}</p>
          </div>
        </section>

        <CaseFooter
          prev={{ label: 'Bombas y Servicios', to: '/projects/bombas' }}
          next={{ label: 'FJG', to: '/projects/fjg' }}
        />

      </main>
    </>
  );
}