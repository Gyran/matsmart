const cheerio = require('cheerio')

const parseProduct = require('./parse-product');

const parseProducts = (html) => {
  const $ = cheerio.load(html)

  const products = [];
   $("div.prd")
    .each((i, el) => {
      const product = parseProduct($, el);

      products.push(product);
    });

  return products;
};

module.exports = parseProducts;
