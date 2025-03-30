module.exports = function (config) {
  config.addPassthroughCopy('src/styles');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/favicons');
  config.addPassthroughCopy('src/scripts');

  config.addFilter('sort', function (value) {
    return value.sort((a, b) => {
      if (a.data.lang.code < b.data.lang.code) {
        return -1;
      } else if (a.data.lang.code > b.data.lang.code) {
        return 1;
      }
      return 0;
    });
  });

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
