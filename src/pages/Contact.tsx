import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import SEO from '../components/SEO';

const FORMSPREE_ID = 'xkokzjqa';

const WA_NUMBER = '541173857303';
const WA_MESSAGE = encodeURIComponent('Hola Sebastián, vi tu portfolio y me gustaría hablar.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const CALENDLY_LINK = 'https://calendly.com/paternostro';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<FormStatus>('idle');
  useReveal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setStatus('success'); form.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <>
      <SEO
        title={t('contact.title')}
        description={t('contact.description')}
        path="/contact"
      />
      <main className='container'>
        <section className="reveal section-spacer">
          <div className="contact-grid">

            {/* INFO */}
            <div className="contact-info-col">
              <h1 className="text-gradient contact-title">{t('contact.title')}</h1>
              <p className="text-secondary contact-description">{t('contact.description')}</p>

              <div className="contact-links-wrapper">

                {/* Calendly */}
                <article className="contact-info-item">
                  <label className="form-label-subtle">{t('contact.info.calendly')}</label>
                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link contact-link contact-link-calendly"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {t('contact.info.calendlyLabel')}
                  </a>
                </article>

                {/* WhatsApp */}
                <article className="contact-info-item">
                  <label className="form-label-subtle">WhatsApp</label>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="nav-link contact-link contact-link-wa">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {t('contact.info.whatsapp', 'WhatsApp')}
                  </a>
                </article>

                {/* Email */}
                <article className="contact-info-item">
                  <label className="form-label-subtle">{t('contact.info.email')}</label>
                  <a href="mailto:sebastian.paternostro@gmail.com" className="nav-link contact-link">
                    sebastian.paternostro@gmail.com
                  </a>
                </article>

                {/* LinkedIn */}
                <article className="contact-info-item">
                  <label className="form-label-subtle">{t('contact.info.linkedin')}</label>
                  <a href="https://www.linkedin.com/in/spaternostro99/" target="_blank" rel="noopener noreferrer" className="nav-link contact-link">
                    linkedin.com/in/spaternostro99
                  </a>
                </article>

              </div>
            </div>

            {/* FORM */}
            <div className="glass-card contact-form-card">
              {status === 'success' ? (
                <div className="form-success-message">
                  <div className="form-success-icon">
                    <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-gradient">{t('contact.success', '¡Gracias!')}</h3>
                  <p className="text-secondary">{t('contact.successDesc', 'Recibí tu mensaje. Te respondo a la brevedad.')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-column form-gap">
                  <div className="form-group">
                    <label className="form-label">{t('contact.name')}</label>
                    <input type="text" name="name" className="form-input" required disabled={status === 'loading'} placeholder={t('contact.placeholders.name')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('contact.email')}</label>
                    <input type="email" name="email" className="form-input" required disabled={status === 'loading'} placeholder={t('contact.placeholders.email')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('contact.message')}</label>
                    <textarea rows={4} name="message" className="form-textarea" required disabled={status === 'loading'} placeholder={t('contact.placeholders.message')} />
                  </div>
                  {status === 'error' && (
                    <p className="form-error">{t('contact.error', 'Hubo un error al enviar. Intentá de nuevo o escribime directo al mail.')}</p>
                  )}
                  <button type="submit" className={`btn btn-primary btn-full ${status === 'loading' ? 'btn-loading' : ''}`} disabled={status === 'loading'}>
                    {status === 'loading' ? t('contact.sending', 'Enviando...') : t('contact.send')}
                  </button>

                  {/* Alternativa Calendly dentro del form card */}
                  <div className="contact-calendly-alt">
                    <span className="contact-calendly-divider">{t('contact.orSchedule', 'o si preferís')}</span>
                    <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-full contact-calendly-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {t('contact.scheduleCall', 'Agendar una llamada')}
                    </a>
                  </div>

                </form>
              )}
            </div>

          </div>
        </section>
      </main>
    </>
  );
}