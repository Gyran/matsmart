const cheerio = require('cheerio')

const parseProduct = require('../parse-product');

describe('it can parse products', () => {

  test('Price for one item', () => {
    const html = `<div itemscope="" itemtype="http://schema.org/Product" class="prd">
      <a href="/hel-lada-barnmat-morot-potatis-6-x-125g">
        <div class="top">
                          	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png"></span>

          <div class="product-teaser-photo-wrap">
            <span class="product-photo teaser">
              <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/hl_hipp_morot_potatis.jpg?itok=UJNnzJqc 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/hl_hipp_morot_potatis.jpg?itok=YsP7ON0m" alt="" title="Bäst före: 2018-09-30">        </span>
          </div>

          <div class="prd-price  no-mp ">
                              <div class="prd-price-num ">
                <span>
                  29            </span>

                <span class="no-mp-trail">
                  :-<span class="unit">st</span>            </span>
              </div>
                  </div>
        </div>

        <div class="middle">
          <span class="prd-name" itemprop="name">
            Hel Låda Barnmat Morot &amp; Potatis 6 x 125g      </span>

          <div class="prd-price-row">
            <span>
              Normalpris:
                          <s>
                  81&nbsp;kr/st            </s>
                      </span>

            <span class="prd-discount">
                          <span class="prd-discount-oldprice">
                  Du sparar:
                  <span data-normal-price="8100" data-cur-price="2900">
                                      52&nbsp;kr                  (-64%)
                                  </span>
                </span>
                      </span>
          </div>
        </div>
      </a>
      <div class="prd-atc">
        <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc ajax-processed" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
    	<div>
    		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
    			<label>Antal </label>
    			<input type="text" name="quantity" value="1" size="3" class="form-text">
                            <div class="product quantity-buttons">
                              <div class="button increase">
                                <span class="icon plus">+</span>
                              </div>
                              <div class="button decrease">
                                <span class="icon minus">-</span>
                              </div>
                            </div>
    		</div>
    		<input type="hidden" name="product_id" value="30156">
    		<input id="add-to-cart-submit-30156" type="submit" name="op" value="Köp" class="form-submit ms-button">
    	</div>
    </form></div></div></div>  </div>
    </div>`;

    const $ = cheerio.load(html);
    const p = parseProduct($, $('div').get());

    expect(p.price).toBe(29);
    expect(p.name).toBe('Hel Låda Barnmat Morot & Potatis 6 x 125g');
    expect(p.url).toBe('/hel-lada-barnmat-morot-potatis-6-x-125g');
    expect(p.imageUrl).toBe('https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/hl_hipp_morot_potatis.jpg?itok=YsP7ON0m');
    expect(p.bestBefore).toEqual(new Date('2018-09-30'));
  });

  test('Multiple items', () => {
    const html = `<div itemscope="" itemtype="http://schema.org/Product" class="prd">
      <a href="/tandborste-humble-brush-barn-bla">
        <div class="top">
                          	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png"></span>

          <div class="product-teaser-photo-wrap">
            <span class="product-photo teaser">
              <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/humblebrush_kidsbla_front.jpg?itok=FdFClfUn 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/humblebrush_kidsbla_front.jpg?itok=lnicoipc" alt="" title="">        </span>
          </div>

          <div class="prd-price ">

              <span class="prd-mp">
                <span class="prd-mp-text">
                  4 för            </span>
              </span>

              <div class="prd-price-num ">
                              99                        <span class="trail">
                  :-            </span>
              </div>

              <span class="prd-mp-unit">
                27kr/st          </span>

                  </div>
        </div>

        <div class="middle">
          <span class="prd-name" itemprop="name">
            Tandborste "Humble Brush" Barn Blå      </span>

          <div class="prd-price-row">
            <span>
              Normalpris:
                          <s>
                  34&nbsp;kr/st            </s>
                      </span>

            <span class="prd-discount">
                          <span class="prd-discount-oldprice">
                  Du sparar:
                  <span data-orig="2700" data-mp-price="9900" data-mp-qty="4" data-normal-price="3400" data-cur-price="2700">
                                      37&nbsp;kr                  (-27%)
                                  </span>
                </span>
                      </span>
          </div>
        </div>
      </a>
      <div class="prd-atc">
        <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc ajax-processed" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
    	<div>
    		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
    			<label>Antal </label>
    			<input type="text" name="quantity" value="4" size="3" class="form-text">
                            <div class="product quantity-buttons">
                              <div class="button increase">
                                <span class="icon plus">+</span>
                              </div>
                              <div class="button decrease">
                                <span class="icon minus">-</span>
                              </div>
                            </div>
    		</div>
    		<input type="hidden" name="product_id" value="2916">
    		<input id="add-to-cart-submit-2916" type="submit" name="op" value="Köp" class="form-submit ms-button">
    	</div>
    </form></div></div></div>  </div>
    </div>`;

    const $ = cheerio.load(html);
    const p = parseProduct($, $('div').get());

    expect(p.price).toBe(99);
    expect(p.name).toBe('Tandborste "Humble Brush" Barn Blå');
    expect(p.url).toBe('/tandborste-humble-brush-barn-bla');
    expect(p.imageUrl).toBe('https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/humblebrush_kidsbla_front.jpg?itok=lnicoipc');
    expect(p.bestBefore).toBeNull();
  });

});
