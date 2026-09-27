import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import CaseLiveLink from '../components/CaseLiveLink';
import SEO from '../components/SEO';

export default function ZafiroFarmacias() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('zafirofarm.title')}
        description={t('zafirofarm.intro')}
        path="/projects/zafirofarm"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('zafirofarm.category')}</p>
          <h1 className="case-title">{t('zafirofarm.title')}</h1>
          <p className="case-intro">{t('zafirofarm.intro')}</p>
          <CaseLiveLink href="https://zafirofarmacias.com.ar/" />

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('zafirofarm.meta.role')}</p>
              <p className="meta-value">{t('zafirofarm.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('zafirofarm.meta.timeline')}</p>
              <p className="meta-value">{t('zafirofarm.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('zafirofarm.meta.focus')}</p>
              <p className="meta-value">{t('zafirofarm.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('zafirofarm.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('zafirofarm.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('zafirofarm.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('zafirofarm.overview.p1')}</p>
            <p>{t('zafirofarm.overview.p2')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('zafirofarm.challenge.title')}</h2>
          <div className="home-grid">
            <div className="glass-card">
              <h3>{t('zafirofarm.challenge.c1title')}</h3>
              <p className="text-secondary">{t('zafirofarm.challenge.c1desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('zafirofarm.challenge.c2title')}</h3>
              <p className="text-secondary">{t('zafirofarm.challenge.c2desc')}</p>
            </div>
            <div className="glass-card">
              <h3>{t('zafirofarm.challenge.c3title')}</h3>
              <p className="text-secondary">{t('zafirofarm.challenge.c3desc')}</p>
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('zafirofarm.beforeAfter.title')}</h2>
          <p className="section-description">{t('zafirofarm.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('zafirofarm.beforeAfter.before')}</p>
              <BrowserFrame src="/images/zafirofarm/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('zafirofarm.beforeAfter.after')}</p>
              <BrowserFrame src="/images/zafirofarm/despues1.png" />
            </div>
          </div>
        </section> */}

        <section className="reveal section-spacer">
          <h2>{t('zafirofarm.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/zafirofarm/despues2.png" />
            <BrowserFrame src="/images/zafirofarm/despues3.png" />
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('zafirofarm.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('zafirofarm.outcome.p1')}</p>
            <p>{t('zafirofarm.outcome.p2')}</p>
          </div>
        </section>

        <CaseFooter
          prev={{ label: 'Netegia', to: '/projects/netegia' }}
        />

      </main>
    </>
  );
}