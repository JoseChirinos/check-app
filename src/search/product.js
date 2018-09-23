import React from 'react';
import './product.css';

const Product = (props)=>(
  <aside>

    <div className="products">
      <label className="option-container" htmlFor={ `product_${props.num}_1a` }>
        {
            props.data.plato === 'Parrilla de Pollo'  ?
            <input type="radio" id={ `product_${props.num}_1a` } name={ `product_${props.num}_1` } value="Parrilla de Pollo" checked={true} onChange={ ()=>{} }/>
            :
            <input type="radio" id={ `product_${props.num}_1a` } name={ `product_${props.num}_1` } value="Parrilla de Pollo"/>
        }
        <div className="product-option">
          <img src="/assets/images/chicken.svg" alt=""/>
        </div>
        <div className="product-option-info">
          Parrilla de Pollo
        </div>
      </label>

      <label className="option-container" htmlFor={ `product_${props.num}_1b` }>
        {
          props.data.plato === 'Lomito de Carne'  ?
          <input type="radio" id={ `product_${props.num}_1b` } name={ `product_${props.num}_1` } value="Lomito de Carne" checked={true} onChange={ ()=>{} }/>
          :
          <input type="radio" id={ `product_${props.num}_1b` } name={ `product_${props.num}_1` } value="Lomito de Carne"/>
        }
        <div className="product-option">
          <img src="/assets/images/meat.svg" alt=""/>
        </div>
        <div className="product-option-info">
          Lomito de Carne
        </div>
      </label>
    </div>

    <div className="products">
      <label className="option-container" htmlFor={ `product_${props.num}_2a` }>
        {
            props.data.bebida === 'Soda'  ?
            <input type="radio" id={ `product_${props.num}_2a` } name={ `product_${props.num}_2` } value="Soda" checked={ true } onChange={ ()=>{} }/>
            :
            <input type="radio" id={ `product_${props.num}_2a` } name={ `product_${props.num}_2` } value="Soda"/>
        }
        <div className="product-option">
          <img src="/assets/images/soda.svg" alt=""/>
        </div>
        <div className="product-option-info">
          Soda
        </div>
      </label>

      <label className="option-container" htmlFor={ `product_${props.num}_2b` }>
        {
            props.data.bebida === 'Cerveza'  ?
            <input type="radio" id={ `product_${props.num}_2b` } name={ `product_${props.num}_2` } value="Cerveza" checked={ true } onChange={ ()=>{} }/>
            :
            <input type="radio" id={ `product_${props.num}_2b` } name={ `product_${props.num}_2` } value="Cerveza"/>
        }
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