import React, { Component } from 'react';
import Product from 'components/Product';

class SelfContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.fetchProducts()
      .then(json => {
        const products = json.products;
        this.setState({ products })
      })
      .catch(err => {
        console.log(err);
        throw new Error("Could not fetch products. Try again later.")
      });

  }

  async fetchProducts(callback) {
    const res = await fetch('//localhost:8003/api/products');
    const json = await res.json();

    return json;
  }

  addToCart = (sku) => {
    console.log(sku);
  }

  render() {
    const products = this.state.products.map(p => {
      return (
        <Product 
          product={p}
          addToCart={this.addToCart}
          key={p.sku}
        />
      )
    })
    return (
      <div className="selfContainer">
        {products}
      </div>
    );
  }
}

export default SelfContainer;