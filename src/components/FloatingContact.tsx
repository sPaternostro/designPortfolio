import { useEffect, useState } from 'react';

const WA_NUMBER = '541173857303';
const WA_MESSAGE = encodeURIComponent('Hola Sebastián, vi tu portfolio y me gustaría hablar.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

// El tooltip aparece una sola vez por sesión, después de 8 segundos.
const TOOLTIP_DELAY_MS = 8000;
const TOOLTIP_DURATION_MS = 4000;
const SESSION_KEY = 'wa_tooltip_shown';

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Mostrar botón después del primer scroll o después de 2s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const onScroll = () => { setVisible(true); };
    window.addEventListener('scroll', onScroll, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Tooltip: una vez por sesión, después de TOOLTIP_DELAY_MS
  useEffect(() => {
    if (!visible) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const showTimer = setTimeout(() => {
      setTooltipVisible(true);
      sessionStorage.setItem(SESSION_KEY, '1');

      const hideTimer = setTimeout(() => {
        setTooltipVisible(false);
      }, TOOLTIP_DURATION_MS);

      return () => clearTimeout(hideTimer);
    }, TOOLTIP_DELAY_MS);

    return () => clearTimeout(showTimer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className='floating-contact-wrapper'>
      {/* Tooltip */}
      <div className={`floating-contact-tooltip ${tooltipVisible ? 'is-visible' : ''}`} aria-hidden={!tooltipVisible}>
        <p>¿Hablamos?</p>
        <span className='floating-tooltip-arrow' />
      </div>

      {/* Botón */}
      <a
        href={WA_LINK}
        target='_blank'
        rel='noopener noreferrer'
        className='floating-contact-btn'
        aria-label='Contacto rápido por mensaje'
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {/* Ícono genérico de burbuja de chat — sin marca WhatsApp */}
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
        </svg>
      </a>
    </div>
  );
}