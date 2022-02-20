/** @type {import('next').NextConfig} */

const sites = {
  portfolio: {
    domain: 'gushbc.dev',
    locales: {
      'pt-br': { title: 'Portfolio', description: 'GustavoHBC' },
      en: { title: 'Portfolio', description: 'GustavoHBC' },
    },
  },
  broxas: {
    domain: 'broxas.gushbc.dev',
    locales: {
      'pt-br': { title: 'Os broxinhas', description: '.' },
      en: { title: 'The little broxas', description: 'teste' },
    },
  },
};

const siteKeys = Object.keys(sites);
const locales = ['en', 'pt-br'];

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
  publicRuntimeConfig: {
    sites,
    locales,
  },
  i18n: {
    locales: siteKeys,
    defaultLocale: siteKeys[0],
    domains: siteKeys.map(siteKey => ({
      domain: sites[siteKey].domain,
      defaultLocale: siteKey,
    })),
  },
  redirects: () => [
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
    {
      source: '/broxas',
      destination: '/',
      permanent: true,
    },
  ],
  future: {
    webpack5: true,
  },
};

module.exports = nextConfig
