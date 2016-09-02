import React, { PropTypes } from 'react';

const ThankYou = ({ orderDetails, onBackToShopping }) => (
  <div className="thank-you">
    <div className="shop-header">
      <h2>¡Gracias por tu compra { orderDetails.firstName }!</h2>
    </div>
    <p>Te llegará en breve a tu dirección { orderDetails.address }</p>
    <p>
      <button className="button" onClick={ onBackToShopping }>
        Volver a la tienda
      </button>
    </p>
  </div>
);

ThankYou.propTypes = {
  orderDetails: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired,
  onBackToShopping: PropTypes.func.isRequired
}

export default ThankYou;
