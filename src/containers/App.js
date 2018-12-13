import React, { Component } from 'react';
import SelfContainer from 'components/SelfContainer';
import FloatCart from 'components/FloatCart';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFloatCartOpen: false
    }
  }
  openFloatCart = () => {
    this.setState({
      isFloatCartOpen: true
    })
  }
  closeFloatCart = () => {
    this.setState({
      isFloatCartOpen: false
    })
  }

  render() {
    const { openFloatCart, closeFloatCart } = this;
    const { isFloatCartOpen } = this.state;
    return (
      <div className="App">
        <SelfContainer openFloatCart={openFloatCart} />
        <FloatCart
          closeFloatCart={closeFloatCart}
          isOpen={isFloatCartOpen}
        />
      </div>
    );
  }
}

export default App;