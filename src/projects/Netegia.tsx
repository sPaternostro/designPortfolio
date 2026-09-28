import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import CaseLiveLink from '../components/CaseLiveLink';
import SEO from '../components/SEO';

export default function Netegia() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('netegia.title')}
        description={t('netegia.intro')}
        path="/projects/netegia"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('netegia.category')}</p>
          <h1 className="case-title">{t('netegia.title')}</h1>
          <p className="case-intro">{t('netegia.intro')}</p>
          <CaseLiveLink href="https://www.netegia.com/" />

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('netegia.meta.role')}</p>
              <p className="meta-value">{t('netegia.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('netegia.meta.timeline')}</p>
              <p className="meta-value">{t('netegia.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('netegia.meta.focus')}</p>
              <p className="meta-value">{t('netegia.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('netegia.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('netegia.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('netegia.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('netegia.overview.p1')}</p>
            <p>{t('netegia.overview.p2')}</p>
            <p>{t('netegia.overview.p3')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('netegia.challenge.title')}</h2>
          <div className="home-grid">
            <div className="glass-card">
              <h3>{t('netegia.challenge.c1title')}</h3>
              <p className="text-secondary">{t('netegia.challenge.c1desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('netegia.challenge.c2title')}</h3>
              <p className="text-secondary">{t('netegia.challenge.c2desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('netegia.challenge.c3title')}</h3>
              <p className="text-secondary">{t('netegia.challenge.c3desc')}</p>
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('netegia.beforeAfter.title')}</h2>
          <p className="section-description">{t('netegia.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('netegia.beforeAfter.before')}</p>
              <BrowserFrame src="/images/netegia/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('netegia.beforeAfter.after')}</p>
              <BrowserFrame src="/images/netegia/despues1.png" />
            </div>
          </div>
        </section> */}

        <section className="reveal section-spacer">
          <h2>{t('netegia.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/netegia/despues2.png" />
            <BrowserFrame src="/images/netegia/despues3.png" />
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('netegia.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('netegia.outcome.p1')}</p>
            <p>{t('netegia.outcome.p2')}</p>
          </div>
        </section>

        <CaseFooter
          prev={{ label: 'FJG', to: '/projects/fjg' }}
          next={{ label: 'Zafiro Farmacias', to: '/projects/zafirofarm' }}
        />

      </main>
    </>
  );
}