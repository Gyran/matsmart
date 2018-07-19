const cheerio = require('cheerio')

const parseProduct = require('./parse-product');

const parseProducts = (html) => {
  const $ = cheerio.load(html)

  const categories = [];
   $("ul#category-menu a")
    .each((i, el) => {
      const $element = $(el);

      const name = $element.text();
      const url = $element.attr('href');

      const category = {
        name,
        url,
      };

      categories.push(category);
    });

  return categories;
};

module.exports = parseProducts;
