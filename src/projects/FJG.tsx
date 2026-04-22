import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import SEO from '../components/SEO';

export default function FJG() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('fjg.title')}
        description={t('fjg.intro')}
        path="/projects/fjg"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('fjg.category')}</p>
          <h1 className="case-title">{t('fjg.title')}</h1>
          <p className="case-intro">{t('fjg.intro')}</p>

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('fjg.meta.role')}</p>
              <p className="meta-value">{t('fjg.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('fjg.meta.timeline')}</p>
              <p className="meta-value">{t('fjg.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('fjg.meta.focus')}</p>
              <p className="meta-value">{t('fjg.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('fjg.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('fjg.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('fjg.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('fjg.overview.p1')}</p>
            <p>{t('fjg.overview.p2')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('fjg.challenge.title')}</h2>
          <div className="home-grid">
            <div className="glass-card">
              <h3>{t('fjg.challenge.c1title')}</h3>
              <p className="text-secondary">{t('fjg.challenge.c1desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('fjg.challenge.c2title')}</h3>
              <p className="text-secondary">{t('fjg.challenge.c2desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('fjg.challenge.c3title')}</h3>
              <p className="text-secondary">{t('fjg.challenge.c3desc')}</p>
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('fjg.beforeAfter.title')}</h2>
          <p className="section-description">{t('fjg.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('fjg.beforeAfter.before')}</p>
              <BrowserFrame src="/images/fjg/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('fjg.beforeAfter.after')}</p>
              <BrowserFrame src="/images/fjg/despues1.png" />
            </div>
          </div>
        </section> */}

        <section className="reveal section-spacer">
          <h2>{t('fjg.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/fjg/despues2.png" />
            <BrowserFrame src="/images/fjg/despues3.png" />
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('fjg.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('fjg.outcome.p1')}</p>
            <p>{t('fjg.outcome.p2')}</p>
          </div>
        </section>

        <CaseFooter
          prev={{ label: 'Comafer', to: '/projects/comafer' }}
          next={{ label: 'Netegia', to: '/projects/netegia' }}
        />

      </main>
    </>
  );
}