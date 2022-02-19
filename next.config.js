/** @type {import('next').NextConfig} */

const sites = {
  portfolio: {
    domain: 'gushbc.dev'
  },
  broxas: {
    domain: 'broxas.gushbc.dev'
  },
};

const siteKeys = Object.keys(sites);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com']
  },
  publicRuntimeConfig: {
    sites
  },
  i18n: {
    domains: siteKeys.map(siteKey => (
      {
        domain: sites[siteKey].domain,
        locales: ['en', 'pt-br']
      }
    ))
  },
  future: {
    webpack5: true
  }
};

module.exports = nextConfig
