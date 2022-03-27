/** @type {import('next').NextConfig} */

const sites = {
  portfolio: {
    domain: 'gushbc.dev',
    title: 'GustavoHBC',
    description: 'Portfolio'
  },  
  broxas: {
    domain: 'broxas.gushbc.dev',
    title: 'Os broxinhas',
  },
};

const siteKeys = Object.keys(sites);
const locales = ['pt-br', 'en'];

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
    }
  ],
  future: {
    webpack5: true,
  },
  env: {
    DB_CONN_STRING: "mongodb+srv://gushbc:7ZcKuoiMf4CBHXVf@cluster0.22bdi.mongodb.net/portfolio?retryWrites=true&w=majority",
  }
};

module.exports = nextConfig
