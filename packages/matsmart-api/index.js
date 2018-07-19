const https = require('https');

const parseProducts = require('./parse-products');

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

  return parseProducts(data);
};

const API = {
  getProducts,
};

module.exports = API
