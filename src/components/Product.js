import React from 'react';
import util from '../util';

const Product = (props) => {
  const product = props.product;
  let productInstallment;

  const formattedPrice = util.formatPrice(product.price);

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span><b> R$ {util.formatPrice(installmentPrice)}</b>
      </div>
    )
  }

  return (
    <div className="item" data-sku={product.sku}>
      <div className="item__thumb">
        <img src={require(`../static/products/${product.sku}_1.jpg`)} alt={product.title} />
      </div>
      <p className="item__title">{product.title}</p>
      <div className="item__price">
        <div className="val">
          <small>R$</small>
          <b>{formattedPrice.substr(0, formattedPrice.length- 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length- 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      <div onClick={() => props.addToCart(product.sku)} className="item__buy-btn">Add To Cart</div>
    </div>
  );
};

export default Product;