const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://serving-edu.com',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'out/',
  nextConfigPath: __dirname + '/next.config.js',
  ignoredExtensions: ['png', 'jpg'],
  // pagesConfig: {
  //   '/login': {
  //     priority: '0.5',
  //     changefreq: 'daily'
  //   }
  // }
});
