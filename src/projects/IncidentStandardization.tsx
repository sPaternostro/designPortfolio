import { useTranslation } from 'react-i18next';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import SEO from '../components/SEO';

export default function IncidentStandardization() {
  const { t } = useTranslation();
  useReveal();

  <SEO title="Incident Standardization" description="Rediseño del proceso interno de reporte de incidentes para reducir fricción entre equipos." path="/projects/incident-standardization" />

  return (
    <main className="container case-study-page">
      <section className="reveal case-hero section-spacer">
        <p className="case-category">{t('incident.category')}</p>
        <h1 className="case-title">{t('incident.title')}</h1>
        <p className="case-intro">{t('incident.subtitle')}</p>

        <div className="case-meta-grid">
          <div className="meta-item">
            <p className="meta-label">{t('incident.meta.role')}</p>
            <p className="meta-value">{t('incident.meta.roleValue')}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">{t('incident.meta.environment')}</p>
            <p className="meta-value">{t('incident.meta.environmentValue')}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">{t('incident.meta.focus')}</p>
            <p className="meta-value">{t('incident.meta.focusValue')}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">{t('incident.meta.outcome')}</p>
            <p className="meta-value">{t('incident.meta.outcomeValue')}</p>
          </div>
        </div>
      </section>

      {/* MI ROL */}
      <section className="reveal section-spacer case-content-text">
        <h2>{t('incident.myRole.title')}</h2>
        <div className="text-stack">
          <p>{t('incident.myRole.p1')}</p>
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('incident.overview.title')}</h2>
        <div className="text-stack">
          <p>{t('incident.overview.p1')}</p>
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('incident.context.title')}</h2>
        <div className="text-stack">
          <p>{t('incident.context.p1')}</p>
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('incident.situation.title')}</h2>
        <div className="text-stack">
          <p>{t('incident.situation.p1')}</p>
          <p>{t('incident.situation.p2')}</p>
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('incident.insight.title')}</h2>
        <div className="text-stack">
          <p>{t('incident.insight.p1')}</p>
        </div>
      </section>

      <section className="reveal section-spacer">
        <h2>{t('incident.processChange.title')}</h2>
        <div className="comparison-grid">
          <div className="glass-card">
            <h3>{t('incident.processChange.before')}</h3>
            <ul className="case-list">
              <li>{t('incident.processChange.beforeItem1')}</li>
              <li>{t('incident.processChange.beforeItem2')}</li>
              <li>{t('incident.processChange.beforeItem3')}</li>
              <li>{t('incident.processChange.beforeItem4')}</li>
            </ul>
          </div>
          <div className="glass-card">
            <h3>{t('incident.processChange.after')}</h3>
            <ul className="case-list">
              <li>{t('incident.processChange.afterItem1')}</li>
              <li>{t('incident.processChange.afterItem2')}</li>
              <li>{t('incident.processChange.afterItem3')}</li>
              <li>{t('incident.processChange.afterItem4')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('incident.approach.title')}</h2>
        <div className="text-stack">
          <p>{t('incident.approach.p1')}</p>
          <ul className="case-list">
            <li>{t('incident.approach.item1')}</li>
            <li>{t('incident.approach.item2')}</li>
            <li>{t('incident.approach.item3')}</li>
            <li>{t('incident.approach.item4')}</li>
            <li>{t('incident.approach.item5')}</li>
            <li>{t('incident.approach.item6')}</li>
            <li>{t('incident.approach.item7')}</li>
          </ul>
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('incident.impact.title')}</h2>
        <div className="text-stack">
          <ul className="case-list">
            <li>{t('incident.impact.item1')}</li>
            <li>{t('incident.impact.item2')}</li>
            <li>{t('incident.impact.item3')}</li>
            <li>{t('incident.impact.item4')}</li>
          </ul>
        </div>
      </section>

      <section className="reveal section-spacer case-content-text">
        <h2>{t('incident.principles.title')}</h2>
        <div className="home-grid">
          <div className="glass-card">
            <h3>{t('incident.principles.principle1Title')}</h3>
            <p className="text-secondary">{t('incident.principles.principle1Desc')}</p>
          </div>
          <div className="glass-card">
            <h3>{t('incident.principles.principle2Title')}</h3>
            <p className="text-secondary">{t('incident.principles.principle2Desc')}</p>
          </div>
          <div className="glass-card">
            <h3>{t('incident.principles.principle3Title')}</h3>
            <p className="text-secondary">{t('incident.principles.principle3Desc')}</p>
          </div>
          <div className="glass-card">
            <h3>{t('incident.principles.principle4Title')}</h3>
            <p className="text-secondary">{t('incident.principles.principle4Desc')}</p>
          </div>
        </div>
      </section>

      <CaseFooter
        next={{ label: 'GamingCity', to: '/projects/gamingcity' }}
      />
    </main>
  );
}