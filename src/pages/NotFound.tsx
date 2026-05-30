import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <main className="container not-found-page">
      <div className="not-found-inner">
        <p className="not-found-code">404</p>
        <h1 className="text-gradient not-found-title">
          {t('notFound.title')}
        </h1>
        <p className="text-secondary not-found-desc">
          {t('notFound.desc')}{' '}
          {t('notFound.redirect', { count: countdown })}
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            {t('notFound.home')}
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            {t('notFound.projects')}
          </Link>
        </div>
      </div>
    </main>
  );
}