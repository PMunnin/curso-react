import React, { Component, PropTypes } from 'react';
import Header from './header';
import CartItem from './cart_item';
import { connect } from 'react-redux';
import { changeQuantity } from '../../modules/cart';
import { goToCatalog, goToCheckout } from '../../modules/route';

class Cart extends Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  // navegar de vuelta al catálogo
  handleBack(e){
    this.props.goToCatalog();
  }

  // ir al checkout
  handleCheckout(e){
    this.props.goToCheckout();
  }


  render(){
    const cartItems = this.props.products.map(p =>
      <CartItem
        key={ p.id }
        product={ p }
        onChangeQuantity={ this.props.changeQuantity }/>);

    const total = this.props.products.reduce((acc, p) => {
      return acc + (p.price * p.qty);
    }, 0).toFixed(2);

    return (
      <div className="cart">
        <Header text='Tu compra' />
        <div className="cart-contents">
          <table cellspacing="0">
            <thead>
              <tr>
                <th className="qty">Cant</th>
                <th className="description">Producto</th>
                <th className="unit-price">Precio</th>
                <th className="subtotal">Total</th>
                <th className="actions"></th>
              </tr>
            </thead>
            <tbody>
              { cartItems }
              <tr className="summary">
                <td colSpan="4" className="total">
                  { total } &euro;
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="footer">
            <a className="button" onClick={ this.handleBack }>Seguir comprando</a>
            { this.props.products.length ?
              <a className="button" onClick={ this.handleCheckout }>Finalizar compra</a> :
                null
            }
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeQuantity: PropTypes.func.isRequired,
  goToCatalog: PropTypes.func.isRequired,
  goToCheckout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  products: state.cart
});

const mapDispatchToProps = {
  changeQuantity,
  goToCatalog,
  goToCheckout
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
