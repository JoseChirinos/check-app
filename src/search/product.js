import React from 'react';
import './product.css';

const Product = ()=>(
  <aside>

    <div className="products">
      <label className="option-container" htmlFor="product1a">
        <input type="radio" id="product1a" name="product1" value="product1a"/>
        <div className="product-option">
          <img src="/assets/images/chicken.svg" alt=""/>
        </div>
        <div className="product-option-info">
          Parrilla de Pollo
        </div>
      </label>

      <label className="option-container" htmlFor="product1b">
        <input type="radio" id="product1b" name="product1" value="product1b"/>
        <div className="product-option">
          <img src="/assets/images/meat.svg" alt=""/>
        </div>
        <div className="product-option-info">
          Lomito de Carne
        </div>
      </label>
    </div>

    <div className="products">
      <label className="option-container" htmlFor="product2a">
        <input type="radio" id="product2a" name="product2" value="product2a"/>
        <div className="product-option">
          <img src="/assets/images/soda.svg" alt=""/>
        </div>
        <div className="product-option-info">
          Soda
        </div>
      </label>

      <label className="option-container" htmlFor="product2b">
        <input type="radio" id="product2b" name="product2" value="product2b"/>
        <div className="product-option">
          <img src="/assets/images/beer.svg" alt=""/>
        </div>
        <div className="product-option-info">
          Cerveza
        </div>
      </label>
    </div>

  </aside>
);

export default Product;