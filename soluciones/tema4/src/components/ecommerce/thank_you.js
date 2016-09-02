import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { goToCatalog } from '../../modules/route';

const ThankYou = ({ orderDetails, goToCatalog }) => (
  <div className="thank-you">
    <div className="shop-header">
      <h2>¡Gracias por tu compra { orderDetails.firstName }!</h2>
    </div>
    <p>Te llegará en breve a tu dirección { orderDetails.address }</p>
    <p>
      <button className="button" onClick={ goToCatalog }>
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
  goToCatalog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  orderDetails: state.order.details
});

const mapDispatchToProps = {
  goToCatalog
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
