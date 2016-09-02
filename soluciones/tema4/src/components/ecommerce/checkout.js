import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveOrder, saveDetails } from '../../modules/order';
import { goToCart } from '../../modules/route';
import Header from './header';
import CheckoutFormItem from './checkout_form_item';

class Checkout extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.saveOrder(this.props.details);
  }

  handleFieldChange(e){
    this.props.saveDetails({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const { errors, details } = this.props;
    return (
      <div className="checkout">
        <Header text='Finalizar pedido' />
        <div className="checkout-form">
          <CheckoutFormItem label='Nombre' error={ errors.firstName }>
            <input
              type='text'
              name='firstName'
              className={ errors.firstName ? 'error' : '' }
              value={ details.firstName }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label='Apellido' error={ errors.lastName }>
            <input
              type='text'
              name='lastName'
              className={ errors.lastName ? 'error' : '' }
              value={ details.lastName }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label='Email' error={ errors.email }>
            <input
              type='text'
              name='email'
              className={ errors.email ? 'error' : '' }
              value={ details.email }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label='Dirección' error={ errors.address }>
            <textarea
              name='address'
              className={ errors.address ? 'error big' : 'big' }
              value={ details.address }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <div className="row">
            <div className="col one-whole">
              <button className="button" onClick={ this.props.goToCart }>&lt; Volver al Carrito</button>
              <button className="button" onClick={ this.handleSubmit }>Finalizar &gt;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  errors: PropTypes.object.isRequired,
  details: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  saveOrder: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.order.errors,
  details: state.order.details
});

const mapDispatchToProps = {
  saveDetails,
  saveOrder,
  goToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
