const parseProduct = ($, element) => {
  const $element = $(element);
  const url = $element.find('a').first().attr('href');
  const name = $element.find('.prd-name').text().trim();

  const priceMatch = $element.find('.prd-price-num').text().match(/\d+/);
  const price = priceMatch ? parseInt(priceMatch[0]) : null;

  const imageEl = $element.find('.product-photo.teaser > img');
  const imageUrl = imageEl.attr('src');
  const bestBeforeMatch = imageEl.attr('title').match(/\d{4}-\d{2}-\d{2}/);
  const bestBefore = bestBeforeMatch ? new Date(bestBeforeMatch[0]) : null;

  return {
    id: url,
    bestBefore,
    name,
    url,
    imageUrl,
    price,
  };
};

module.exports = parseProduct;
