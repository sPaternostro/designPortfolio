import { useTranslation } from 'react-i18next';

export default function PlaceLine() {
  const { t } = useTranslation();

  return (
    <p className="place-line">
      <span className="place-now">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        {t('place.now')}
      </span>
      <span className="place-arrow" aria-hidden="true">→</span>
      <span className="place-next">{t('place.next')}</span>
    </p>
  );
}
