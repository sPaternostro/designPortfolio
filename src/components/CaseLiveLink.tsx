import { useTranslation } from 'react-i18next';

export default function CaseLiveLink({ href }: { href: string }) {
  const { t } = useTranslation();

  return (
    <p className="case-live">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {t('caseNav.liveSite')}
      </a>
    </p>
  );
}
