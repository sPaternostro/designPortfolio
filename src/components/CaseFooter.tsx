import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface CaseFooterProps {
  prev?: { label: string; to: string };
  next?: { label: string; to: string };
}

export default function CaseFooter({ prev, next }: CaseFooterProps) {
  const { t } = useTranslation();

  return (
    <section className="case-footer-section">
      {/* Navegación entre casos */}
      {(prev || next) && (
        <nav className="case-nav">
          <div className="case-nav-inner">
            {prev ? (
              <Link to={prev.to} className="case-nav-link case-nav-prev">
                <span className="case-nav-direction">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t('caseNav.prev', 'Anterior')}
                </span>
                <span className="case-nav-title">{prev.label}</span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link to={next.to} className="case-nav-link case-nav-next">
                <span className="case-nav-direction">
                  {t('caseNav.next', 'Siguiente')}
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="case-nav-title">{next.label}</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}

      {/* CTA de contacto */}
      <div className="case-cta glass-card">
        <p className="case-cta-label">{t('caseNav.ctaTag', '¿Trabajamos juntos?')}</p>
        <h2 className="case-cta-title text-gradient">
          {t('caseNav.ctaTitle', 'Si este tipo de trabajo te interesa, hablemos.')}
        </h2>
        <p className="text-secondary case-cta-desc">
          {t('caseNav.ctaDesc', 'Puedo aportar estructura, claridad y foco en resultados a tu próximo proyecto.')}
        </p>
        <div className="case-cta-actions">
          <Link to="/hire" className="btn btn-primary">
            {t('caseNav.ctaButton', 'Ver perfil')}
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            {t('caseNav.ctaProjects', 'Ver otros casos')}
          </Link>
        </div>
      </div>
    </section>
  );
}