import { useTranslation } from 'react-i18next';
import BrowserFrame from "../components/BrowserFrame";
import useReveal from "../hooks/useReveal";
import CaseFooter from '../components/CaseFooter';
import CaseLiveLink from '../components/CaseLiveLink';
import SEO from '../components/SEO';

export default function GamingCity() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO title="GamingCity" description="Migración de marketplace a ecommerce independiente." path="/projects/gamingcity" />
      <main className="container case-study-page">
      <section className="reveal case-hero section-spacer">
        <p className="case-category">{t('gamingcity.category')}</p>
        <h1 className="case-title">{t('gamingcity.title')}</h1>
        <p className="case-intro">{t('gamingcity.intro')}</p>
        <CaseLiveLink href="https://www.gamingcity.com.ar/" />

        <div className="case-meta-grid">
          <div className="meta-item">
            <p className="meta-label">{t('gamingcity.meta.role')}</p>
            <p className="meta-value">{t('gamingcity.meta.roleValue')}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">{t('gamingcity.meta.timeline')}</p>
            <p className="meta-value">{t('gamingcity.meta.timelineValue')}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">{t('gamingcity.meta.focus')}</p>
            <p className="meta-value">{t('gamingcity.meta.focusValue')}</p>
          </div>
        </div>
      </section>

      {/* MI ROL */}
      <section className="reveal section-spacer case-content-text">
        <h2>{t('gamingcity.myRole.title')}</h2>
        <div className="text-stack">
          <p>{t('gamingcity.myRole.p1')}</p>
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('gamingcity.overview.title')}</h2>
        <div className="text-stack">
          <p>{t('gamingcity.overview.p1')}</p>
          <p>{t('gamingcity.overview.p2')}</p>
          <p>{t('gamingcity.overview.p3')}</p>
        </div>
      </section>

      <section className="reveal section-spacer">
        <h2>{t('gamingcity.beforeAfter.title')}</h2>
        <p className="section-description">{t('gamingcity.beforeAfter.desc')}</p>
        <div className="comparison-grid">
          <div className="comparison-item">
            <p className="comparison-label">{t('gamingcity.beforeAfter.before')}</p>
            <BrowserFrame src="/images/gamingcity/antes1.png" />
          </div>
          <div className="comparison-item">
            <p className="comparison-label">{t('gamingcity.beforeAfter.after')}</p>
            <BrowserFrame src="/images/gamingcity/despues1.png" />
          </div>
        </div>
      </section>

      <section className="reveal section-spacer">
        <h2>{t('gamingcity.experience')}</h2>
        <div className="case-gallery-grid">
          <BrowserFrame src="/images/gamingcity/despues2.png" />
          <BrowserFrame src="/images/gamingcity/despues3.png" />
          <BrowserFrame src="/images/gamingcity/despues6.png" />
          <BrowserFrame src="/images/gamingcity/despues5.png" />
        </div>
      </section>

      <section className="reveal section-spacer">
        <h3>{t('gamingcity.pcBuilder.title')}</h3>
        <p className="section-description">{t('gamingcity.pcBuilder.desc')}</p>
        <div className="full-width-frame">
          <BrowserFrame src="/images/gamingcity/despues4.png" />
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('gamingcity.outcome.title')}</h2>
        <div className="text-stack">
          <p>{t('gamingcity.outcome.p1')}</p>
          <p>{t('gamingcity.outcome.p2')}</p>
        </div>
      </section>

      <CaseFooter
        prev={{ label: 'Incident Standardization', to: '/projects/incident-standardization' }}
        next={{ label: 'KIRO Store', to: '/projects/kiro' }}
      />
    </main>
    </>
  );
}