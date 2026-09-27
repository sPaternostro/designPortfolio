import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import PlaceLine from './PlaceLine';

export default function ProfileHero({ actions }: { actions: ReactNode }) {
  const { t } = useTranslation();

  return (
    <div className="profile-hero glass-card">
      <div className="hire-header-meta">
        <span className="hire-available-badge">
          <span className="hire-available-dot" />
          {t('hire.badge')}
        </span>
      </div>
      <PlaceLine />
      <p className="profile-role">{t('hire.role')}</p>
      <h1 className="profile-name text-gradient">Sebastián Paternostro</h1>
      <p className="profile-lead">{t('hire.tagline')}</p>
      <p className="profile-sub">{t('hire.taglineSub')}</p>
      <div className="profile-actions">{actions}</div>
    </div>
  );
}
