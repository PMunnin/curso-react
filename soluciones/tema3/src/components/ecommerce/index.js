import React, { Component, PropTypes } from 'react';
import { products as catalogProducts } from '../../data/catalog';

import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thank_you';

class Ecommerce extends Component {
  constructor(){
    super();
    this.state = {
      page: 'catalog',
      products: catalogProducts,
      cart: [],
      orderDetails: {
      },
      orderErrors: {
      }
    }

    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  // Añadir un producto al carrito
  handleAddToCart(product){
    let cartItems = this.state.cart;
    let existingProduct = cartItems.find(p => p.id === product.id);
    if(existingProduct){
      cartItems = cartItems.map(p => {
        if(p.id === product.id){
          p.qty = p.qty + 1;
        }
        return p;
      });
    }
    else {
      const newProduct = Object.assign({}, product, { qty: 1 });
      cartItems = cartItems.concat([newProduct]);
    }

    this.setState({
      cart: cartItems,
      page: 'cart'
    });
  }

  // Cambiar la cantidad de un producto
  handleChangeQuantity(product, qty){
    const cartItems = this.state.cart.map(p => {
      if(p.id === product.id){
        p.qty = qty;
      }
      return p;
    })
    .filter(p => p.qty > 0);

    this.setState({
      cart: cartItems
    });
  }

  handleCheckout(details){
    let errors = {}
    //verificar y establecer errores
    if(details.firstName === ''){
      errors.firstName = 'El nombre es obligatorio';
    }
    if(details.lastName === ''){
      errors.lastName = 'El apellido es obligatorio';
    }
    if(details.email === ''){
      errors.email = 'El email es obligatorio';
    }
    if(details.address === ''){
      errors.address = 'La dirección es obligatoria';
    }

    if(Object.keys(errors).length > 0){
      this.setState({
        orderErrors: errors
      });
    }
    else {
      //navegar a página de ThankYou
      this.setState({
        orderDetails: details,
        cart: [],
        page: 'thank-you'
      });
    }
  }

  // Cambiar de página
  handleNavigate(newPage){
    this.setState({
      page: newPage
    });
  }

  getComponent(page){
    switch(page){
      case 'catalog':
        return <Catalog
          products={ this.state.products }
          onAddToCart={ this.handleAddToCart } />
      case 'cart':
        return <Cart
          products={ this.state.cart }
          onChangeQuantity={ this.handleChangeQuantity }
          onNavigate={ this.handleNavigate } />
      case 'checkout':
        return <Checkout
          errors={ this.state.orderErrors }
          onProcessOrder={ this.handleCheckout }
          onBackToCart={ () => this.handleNavigate('cart') } />
      case 'thank-you':
        return <ThankYou
          orderDetails={ this.state.orderDetails }
          onBackToShopping={ () => this.handleNavigate('catalog') } />
      default:
        return null;
    }
  }

  render(){
    const component = this.getComponent(this.state.page);

    return (
      <div className="shopping-cart">
        { component }
      </div>
    );
  }
}

export default Ecommerce;
