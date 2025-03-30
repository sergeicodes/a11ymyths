module.exports = function (config) {
  config.addPassthroughCopy('src/styles');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/favicons');
  config.addPassthroughCopy('src/scripts');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
    },
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passThroughFileCopy: true,
  };
};
