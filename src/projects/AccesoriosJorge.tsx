import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import CaseLiveLink from '../components/CaseLiveLink';
import SEO from '../components/SEO';

export default function AccesoriosJorge() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('accesoriosjorge.title')}
        description={t('accesoriosjorge.intro')}
        path="/projects/accesoriosjorge"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('accesoriosjorge.category')}</p>
          <h1 className="case-title">{t('accesoriosjorge.title')}</h1>
          <p className="case-intro">{t('accesoriosjorge.intro')}</p>
          <CaseLiveLink href="https://accesoriosjorge-jrd-mayoristas.com.ar/" />

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('accesoriosjorge.meta.role')}</p>
              <p className="meta-value">{t('accesoriosjorge.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('accesoriosjorge.meta.timeline')}</p>
              <p className="meta-value">{t('accesoriosjorge.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('accesoriosjorge.meta.focus')}</p>
              <p className="meta-value">{t('accesoriosjorge.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('accesoriosjorge.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('accesoriosjorge.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('accesoriosjorge.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('accesoriosjorge.overview.p1')}</p>
            <p>{t('accesoriosjorge.overview.p2')}</p>
            <p>{t('accesoriosjorge.overview.p3')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('accesoriosjorge.challenge.title')}</h2>
          <div className="home-grid">
            <div className="glass-card">
              <h3>{t('accesoriosjorge.challenge.c1title')}</h3>
              <p className="text-secondary">{t('accesoriosjorge.challenge.c1desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('accesoriosjorge.challenge.c2title')}</h3>
              <p className="text-secondary">{t('accesoriosjorge.challenge.c2desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('accesoriosjorge.challenge.c3title')}</h3>
              <p className="text-secondary">{t('accesoriosjorge.challenge.c3desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('accesoriosjorge.challenge.c4title')}</h3>
              <p className="text-secondary">{t('accesoriosjorge.challenge.c4desc')}</p>
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('accesoriosjorge.beforeAfter.title')}</h2>
          <p className="section-description">{t('accesoriosjorge.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('accesoriosjorge.beforeAfter.before')}</p>
              <BrowserFrame src="/images/accesoriosjorge/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('accesoriosjorge.beforeAfter.after')}</p>
              <BrowserFrame src="/images/accesoriosjorge/despues1.png" />
            </div>
          </div>
        </section> */}

        <section className="reveal section-spacer">
          <h2>{t('accesoriosjorge.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/accesoriosjorge/despues2.png" />
            <BrowserFrame src="/images/accesoriosjorge/despues3.png" />
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('accesoriosjorge.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('accesoriosjorge.outcome.p1')}</p>
            <p>{t('accesoriosjorge.outcome.p2')}</p>
          </div>
        </section>

        <CaseFooter
          next={{ label: 'Biotec S.A.', to: '/projects/biotec' }}
        />

      </main>
    </>
  );
}