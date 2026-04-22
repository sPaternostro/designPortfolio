import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import SEO from '../components/SEO';

export default function Biotec() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <SEO
        title={t('biotec.title')}
        description={t('biotec.intro')}
        path="/projects/biotec"
      />
      <main className="container case-study-page">

        <section className="reveal case-hero section-spacer">
          <p className="case-category">{t('biotec.category')}</p>
          <h1 className="case-title">{t('biotec.title')}</h1>
          <p className="case-intro">{t('biotec.intro')}</p>

          <div className="case-meta-grid">
            <div className="meta-item">
              <p className="meta-label">{t('biotec.meta.role')}</p>
              <p className="meta-value">{t('biotec.meta.roleValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('biotec.meta.timeline')}</p>
              <p className="meta-value">{t('biotec.meta.timelineValue')}</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">{t('biotec.meta.focus')}</p>
              <p className="meta-value">{t('biotec.meta.focusValue')}</p>
            </div>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('biotec.myRole.title')}</h2>
          <div className="text-stack">
            <p>{t('biotec.myRole.p1')}</p>
          </div>
        </section>

        <section className="reveal section-spacer case-content-text">
          <h2>{t('biotec.overview.title')}</h2>
          <div className="text-stack">
            <p>{t('biotec.overview.p1')}</p>
            <p>{t('biotec.overview.p2')}</p>
            <p>{t('biotec.overview.p3')}</p>
          </div>
        </section>

        <section className="reveal section-spacer">
          <h2>{t('biotec.beforeAfter.title')}</h2>
          <p className="section-description">{t('biotec.beforeAfter.desc')}</p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('biotec.beforeAfter.before')}</p>
              <BrowserFrame src="/images/biotec/antes1.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('biotec.beforeAfter.after')}</p>
              <BrowserFrame src="/images/biotec/despues1.png" />
            </div>
          </div>
          <div className="comparison-grid">
            <div className="comparison-item">
              <p className="comparison-label">{t('biotec.beforeAfter.before')}</p>
              <BrowserFrame src="/images/biotec/antes2.png" />
            </div>
            <div className="comparison-item">
              <p className="comparison-label">{t('biotec.beforeAfter.after')}</p>
              <BrowserFrame src="/images/biotec/despues2.png" />
            </div>
          </div>
        </section>

        {/* <section className="reveal section-spacer">
          <h2>{t('biotec.experience')}</h2>
          <div className="case-gallery-grid">
            <BrowserFrame src="/images/biotec/despues2.png" />
            <BrowserFrame src="/images/biotec/despues3.png" />
          </div>
        </section> */}

        <section className="reveal section-spacer case-content-text">
          <h2>{t('biotec.outcome.title')}</h2>
          <div className="text-stack">
            <p>{t('biotec.outcome.p1')}</p>
            <p>{t('biotec.outcome.p2')}</p>
          </div>
        </section>

        <CaseFooter
          prev={{ label: 'Accesorios Jorge', to: '/projects/accesoriosjorge' }}
          next={{ label: 'BHB2B', to: '/projects/bhb2b' }}
        />

      </main>
    </>
  );
}