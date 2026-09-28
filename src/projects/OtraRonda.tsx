import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import CaseLiveLink from '../components/CaseLiveLink';
import SEO from '../components/SEO';

export default function OtraRonda() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('otraronda.title')}
        description={t('otraronda.intro')}
        path="/projects/otraronda"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('otraronda.category')}</p>
          <h1 className="case-title">{t('otraronda.title')}</h1>
          <p className="case-intro">{t('otraronda.intro')}</p>
          <CaseLiveLink href="https://www.otra-ronda.com/" />

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('otraronda.meta.role')}</p>
              <p className="meta-value">{t('otraronda.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('otraronda.meta.timeline')}</p>
              <p className="meta-value">{t('otraronda.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('otraronda.meta.focus')}</p>
              <p className="meta-value">{t('otraronda.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('otraronda.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('otraronda.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('otraronda.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('otraronda.overview.p1')}</p>
            <p>{t('otraronda.overview.p2')}</p>
            <p>{t('otraronda.overview.p3')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('otraronda.challenge.title')}</h2>
          <div className="home-grid">
            <div className="glass-card">
              <h3>{t('otraronda.challenge.c1title')}</h3>
              <p className="text-secondary">{t('otraronda.challenge.c1desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('otraronda.challenge.c2title')}</h3>
              <p className="text-secondary">{t('otraronda.challenge.c2desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('otraronda.challenge.c3title')}</h3>
              <p className="text-secondary">{t('otraronda.challenge.c3desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('otraronda.challenge.c4title')}</h3>
              <p className="text-secondary">{t('otraronda.challenge.c4desc')}</p>
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('otraronda.beforeAfter.title')}</h2>
          <p className="section-description">{t('otraronda.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('otraronda.beforeAfter.before')}</p>
              <BrowserFrame src="/images/otraronda/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('otraronda.beforeAfter.after')}</p>
              <BrowserFrame src="/images/otraronda/despues1.png" />
            </div>
          </div>
        </section> */}

        <section className="reveal section-spacer">
          <h2>{t('otraronda.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/otraronda/despues2.png" />
            <BrowserFrame src="/images/otraronda/despues3.png" />
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('otraronda.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('otraronda.outcome.p1')}</p>
            <p>{t('otraronda.outcome.p2')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('otraronda.notes.title')}</h2>
          <div className="text-stack">
            <p>{t('otraronda.notes.p1')}</p>
          </div>
        </section>

        <CaseFooter
          prev={{ label: 'Netegia', to: '/projects/netegia' }}
          next={{ label: 'Zafiro Farmacias', to: '/projects/zafirofarm' }}
        />

      </main>
    </>
  );
}