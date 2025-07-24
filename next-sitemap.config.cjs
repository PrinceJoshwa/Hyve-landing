/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.hyvefreelance.com', // your real domain here
  generateRobotsTxt: true,
  sitemapSize: 5000,

  async additionalPaths(config) {
    const paths = [
      '/blog',
      '/contact',
      '/about',
      '/privacy',
      '/terms',
    ];

    return paths.map((url) => ({
      loc: url,
      changefreq: 'monthly',
      priority: 0.7,
    }));
  },
};
