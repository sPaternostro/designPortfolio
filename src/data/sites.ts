export type Site = {
  key: string;
  to: string;
  image?: string;
  logo?: string;
  live?: string;
  demo?: boolean;
};

export const SITES: Site[] = [
  {
    key: 'gamingcity',
    to: '/projects/gamingcity',
    image: '/images/gamingcity/despues1.png',
    logo: '/images/logos/gamingcity.webp',
    live: 'https://www.gamingcity.com.ar/',
  },
  {
    key: 'accesoriosjorge',
    to: '/projects/accesoriosjorge',
    image: '/images/accesoriosjorge/despues2.png',
    logo: '/images/logos/accesoriosjorge.png',
    live: 'https://accesoriosjorge-jrd-mayoristas.com.ar/',
  },
  {
    key: 'biotec',
    to: '/projects/biotec',
    image: '/images/biotec/despues1.png',
    logo: '/images/logos/biotec.gif',
    live: 'https://www.biotecsa.com.ar/',
  },
  {
    key: 'otraronda',
    to: '/projects/otraronda',
    image: '/images/otraronda/despues2.png',
    logo: '/images/logos/otraronda.png',
    live: 'https://www.otra-ronda.com/',
  },
  {
    key: 'comafer',
    to: '/projects/comafer',
    image: '/images/comafer/despues2.png',
    live: 'https://www.comafer.com.ar/',
  },
  {
    key: 'bhb2b',
    to: '/projects/bhb2b',
    image: '/images/bhb2b/despues2.png',
    live: 'https://www.bulonerahurlingham.com/',
  },
  {
    key: 'netegia',
    to: '/projects/netegia',
    image: '/images/netegia/despues2.png',
    live: 'https://www.netegia.com/',
  },
  {
    key: 'zafirofarm',
    to: '/projects/zafirofarm',
    image: '/images/zafirofarm/despues2.png',
    live: 'https://zafirofarmacias.com.ar/',
  },
  {
    key: 'bombas',
    to: '/projects/bombas',
    image: '/images/bombas/despues2.png',
    live: 'https://www.bombasysuministros.com.ar/',
  },
  {
    key: 'fjg',
    to: '/projects/fjg',
    image: '/images/fjg/despues2.png',
    live: 'https://www.fjgimpermeabilizaciones.com.ar/',
  },
  {
    key: 'kiro',
    to: '/projects/kiro',
    image: '/images/kiro/home.png',
    logo: '/images/logos/kiro.svg',
    demo: true,
  },
  {
    key: 'incident',
    to: '/projects/incident-standardization',
  },
];

export const FEATURED_KEYS = ['gamingcity', 'accesoriosjorge', 'otraronda', 'kiro'] as const;

export function findSite(key: string) {
  return SITES.find((site) => site.key === key);
}
