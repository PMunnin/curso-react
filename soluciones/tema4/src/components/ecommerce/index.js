import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thank_you';

class Ecommerce extends Component {
  getComponent(page){
    switch(page){
      case 'catalog':
        return <Catalog />
      case 'cart':
        return <Cart />
      case 'checkout':
        return <Checkout />
      case 'thank-you':
        return <ThankYou />
      default:
        return null;
    }
  }

  render(){
    const component = this.getComponent(this.props.route);

    return (
      <div className="shopping-cart">
        { component }
      </div>
    );
  }
}

Ecommerce.propTypes = {
  route: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  route: state.route
});

export default connect(mapStateToProps)(Ecommerce);
