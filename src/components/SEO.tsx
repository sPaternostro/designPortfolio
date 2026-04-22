import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const SITE_NAME = 'Sebastián Paternostro';
const BASE_URL = 'https://spaternostro.com.ar'; // ← cambiá por tu dominio real cuando lo tengas
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const DEFAULT_DESCRIPTION =
  'Portfolio de Sebastián Paternostro, diseñador web basado en Buenos Aires. Especializado en estructura, claridad e impacto de negocio.';

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_IMAGE,
}: SEOProps) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Web Designer & Project Manager`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}