import React, { Component } from 'react';

class FloatCart extends Component {  
  render() {
    let classes = ['float-cart'];

    if(!!this.props.isOpen)
    classes.push('float-cart--open');
    console.log(classes);
    return (
      <div className={classes.join(" ")}>
        <div onClick={this.props.closeFloatCart} className="float-cart__close-btn">
          X
        </div>
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">3</span>
          </span>
          <span className="header-title">Bag</span>
        </div>
        <div className="float-cart__shelf-container">
          <div className="shelf-item">
            <div className="shelf-item__thumb">
              <img src="#" />
            </div>
            <div className="shelf-item__details">
              <p className="title">Dark Thug Blue-Navy T-Shirt</p>
              <p className="desc">
                M | Front print and paisley print <br />
                Quantity: 3
              </p>
            </div>
            <div className="shelf-item__price">
              <p>R$ 29.45</p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">R$ 379,70</p>
            <small className="sub-price__installment">OR UP TO 10 x $ 37.97</small>
          </div>
          <div className="buy-btn">CHECKOUT</div>
        </div>
      </div>
    );
  }
}

export default FloatCart;
