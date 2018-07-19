const cheerio = require('cheerio')
const https = require('https');

const parseProduct = require('./parse-product');

const BASE_URL = 'https://www.matsmart.se';

const get = async (url) => {
  return new Promise((resovle, reject) => {
    let data = '';

    const request = https.get(url, (response) => {
      response.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      response.on('end', () => {
        resovle(data);
      });
    });
  });

  request.on('error', (error) => {
    reject(error);
  });
};

const getProducts = async (page) => {
  const data = await get(`${ BASE_URL }/${ page }`);

  const $ = cheerio.load(data)

  const products = [];
   $("div.prd")
    .each((i, el) => {
      const product = parseProduct($, el);

      products.push(product);
    });

  return products;
};

const API = {
  getProducts,

};

module.exports = API
