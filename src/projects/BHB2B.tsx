import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import SEO from '../components/SEO';

export default function BHB2B() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('bhb2b.title')}
        description={t('bhb2b.intro')}
        path="/projects/bhb2b"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('bhb2b.category')}</p>
          <h1 className="case-title">{t('bhb2b.title')}</h1>
          <p className="case-intro">{t('bhb2b.intro')}</p>

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('bhb2b.meta.role')}</p>
              <p className="meta-value">{t('bhb2b.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('bhb2b.meta.timeline')}</p>
              <p className="meta-value">{t('bhb2b.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('bhb2b.meta.focus')}</p>
              <p className="meta-value">{t('bhb2b.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('bhb2b.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('bhb2b.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('bhb2b.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('bhb2b.overview.p1')}</p>
            <p>{t('bhb2b.overview.p2')}</p>
            <p>{t('bhb2b.overview.p3')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('bhb2b.challenge.title')}</h2>
          <div className="home-grid">
            <div className="glass-card">
              <h3>{t('bhb2b.challenge.c1title')}</h3>
              <p className="text-secondary">{t('bhb2b.challenge.c1desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('bhb2b.challenge.c2title')}</h3>
              <p className="text-secondary">{t('bhb2b.challenge.c2desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('bhb2b.challenge.c3title')}</h3>
              <p className="text-secondary">{t('bhb2b.challenge.c3desc')}</p>
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('bhb2b.beforeAfter.title')}</h2>
          <p className="section-description">{t('bhb2b.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('bhb2b.beforeAfter.before')}</p>
              <BrowserFrame src="/images/bhb2b/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('bhb2b.beforeAfter.after')}</p>
              <BrowserFrame src="/images/bhb2b/despues1.png" />
            </div>
          </div>
        </section> */}

        <section className="reveal section-spacer">
          <h2>{t('bhb2b.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/bhb2b/despues2.png" />
            <BrowserFrame src="/images/bhb2b/despues3.png" />
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('bhb2b.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('bhb2b.outcome.p1')}</p>
            <p>{t('bhb2b.outcome.p2')}</p>
          </div>
        </section>

        <CaseFooter
          prev={{ label: 'Biotec S.A.', to: '/projects/biotec' }}
          next={{ label: 'Bombas y Servicios', to: '/projects/bombas' }}
        />

      </main>
    </>
  );
}