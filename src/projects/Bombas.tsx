import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import SEO from '../components/SEO';

export default function Bombas() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('bombas.title')}
        description={t('bombas.intro')}
        path="/projects/bombas"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('bombas.category')}</p>
          <h1 className="case-title">{t('bombas.title')}</h1>
          <p className="case-intro">{t('bombas.intro')}</p>

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('bombas.meta.role')}</p>
              <p className="meta-value">{t('bombas.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('bombas.meta.timeline')}</p>
              <p className="meta-value">{t('bombas.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('bombas.meta.focus')}</p>
              <p className="meta-value">{t('bombas.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('bombas.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('bombas.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('bombas.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('bombas.overview.p1')}</p>
            <p>{t('bombas.overview.p2')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('bombas.challenge.title')}</h2>
          <div className="home-grid">
            <div className="glass-card">
              <h3>{t('bombas.challenge.c1title')}</h3>
              <p className="text-secondary">{t('bombas.challenge.c1desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('bombas.challenge.c2title')}</h3>
              <p className="text-secondary">{t('bombas.challenge.c2desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('bombas.challenge.c3title')}</h3>
              <p className="text-secondary">{t('bombas.challenge.c3desc')}</p>
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('bombas.beforeAfter.title')}</h2>
          <p className="section-description">{t('bombas.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('bombas.beforeAfter.before')}</p>
              <BrowserFrame src="/images/bombas/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('bombas.beforeAfter.after')}</p>
              <BrowserFrame src="/images/bombas/despues1.png" />
            </div>
          </div>
        </section> */}

        <section className="reveal section-spacer">
          <h2>{t('bombas.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/bombas/despues2.png" />
            <BrowserFrame src="/images/bombas/despues3.png" />
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('bombas.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('bombas.outcome.p1')}</p>
            <p>{t('bombas.outcome.p2')}</p>
          </div>
        </section>

        <CaseFooter
          prev={{ label: 'BHB2B', to: '/projects/bhb2b' }}
          next={{ label: 'Comafer', to: '/projects/comafer' }}
        />

      </main>
    </>
  );
}