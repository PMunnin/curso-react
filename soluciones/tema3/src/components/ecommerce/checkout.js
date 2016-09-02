import React, { Component, PropTypes } from 'react'
import Header from './header';
import CheckoutFormItem from './checkout_form_item';

class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: ''
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onProcessOrder(Object.assign({}, this.state));
  }

  render () {
    const { errors } = this.props;
    return (
      <div className="checkout">
        <Header text='Finalizar pedido' />
        <div className="checkout-form">
          <CheckoutFormItem label='Nombre' error={ errors.firstName }>
            <input
              type='text'
              name='firstName'
              className={ errors.firstName ? 'error' : '' }
              value={ this.state.firstName }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label='Apellido' error={ errors.lastName }>
            <input
              type='text'
              name='lastName'
              className={ errors.lastName ? 'error' : '' }
              value={ this.state.lastName }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label='Email' error={ errors.email }>
            <input
              type='text'
              name='email'
              className={ errors.email ? 'error' : '' }
              value={ this.state.email }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label='Dirección' error={ errors.address }>
            <textarea
              name='address'
              className={ errors.address ? 'error big' : 'big' }
              value={ this.state.address }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <div className="row">
            <div className="col one-whole">
              <button className="button" onClick={ this.props.onBackToCart }>&lt; Volver al Carrito</button>
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
  onProcessOrder: PropTypes.func.isRequired,
  onBackToCart: PropTypes.func.isRequired
}

export default Checkout;
