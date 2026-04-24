import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const WA_NUMBER = '541173857303';
const WA_MESSAGE = encodeURIComponent('Hola Sebastián, vi tu portfolio y me gustaría hablar.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const MAIL_LINK = 'mailto:sebastian.paternostro@gmail.com';

const CALENDLY_LINK = 'https://calendly.com/paternostro';

const SESSION_KEY = 'fc_tooltip_shown';
const TOOLTIP_DELAY_MS = 8000;
const TOOLTIP_DURATION_MS = 4000;

export default function FloatingContact() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Mostrar después de 2s o primer scroll
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const onScroll = () => setVisible(true);
    window.addEventListener('scroll', onScroll, { once: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, []);

  // Tooltip: una vez por sesión
  useEffect(() => {
    if (!visible || sessionStorage.getItem(SESSION_KEY)) return;
    const show = setTimeout(() => {
      setTooltipVisible(true);
      sessionStorage.setItem(SESSION_KEY, '1');
      const hide = setTimeout(() => setTooltipVisible(false), TOOLTIP_DURATION_MS);
      return () => clearTimeout(hide);
    }, TOOLTIP_DELAY_MS);
    return () => clearTimeout(show);
  }, [visible]);

  // Cerrar dropdown al hacer click afuera
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  // Cerrar dropdown con Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  if (!visible) return null;

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setTooltipVisible(false);
  };

  return (
    <div className="floating-contact-wrapper" ref={wrapperRef}>

      {/* Tooltip — solo cuando el menú está cerrado */}
      {!open && (
        <div
          className={`floating-contact-tooltip ${tooltipVisible ? 'is-visible' : ''}`}
          aria-hidden={!tooltipVisible}
        >
          <p>{t('floatingContact.tooltip', '¿Hablamos?')}</p>
          <span className="floating-tooltip-arrow" />
        </div>
      )}

      {/* Dropdown menu */}
      <div className={`floating-menu ${open ? 'is-open' : ''}`} role="menu" aria-label={t('floatingContact.menuLabel', 'Opciones de contacto')}>

        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-menu-item"
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <span className="floating-menu-icon">
            {/* Calendario */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </span>
          <span className="floating-menu-label">{t('floatingContact.calendly', 'Agendar llamada')}</span>
        </a>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-menu-item"
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <span className="floating-menu-icon">
            {/* WhatsApp */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>
          <span className="floating-menu-label">{t('floatingContact.whatsapp', 'WhatsApp')}</span>
        </a>

        <a
          href={MAIL_LINK}
          className="floating-menu-item"
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <span className="floating-menu-icon">
            {/* Sobre */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </span>
          <span className="floating-menu-label">{t('floatingContact.email', 'Enviar correo')}</span>
        </a>

      </div>

      {/* Botón principal */}
      <button
        className={`floating-contact-btn ${open ? 'is-open' : ''}`}
        onClick={handleToggle}
        aria-label={t('floatingContact.ariaLabel', 'Abrir opciones de contacto')}
        aria-expanded={open}
        aria-haspopup="menu"
        onMouseEnter={() => !open && setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {/* Ícono que rota a X cuando está abierto */}
        <svg
          className="floating-btn-icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </>
          ) : (
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          )}
        </svg>
      </button>

    </div>
  );
}