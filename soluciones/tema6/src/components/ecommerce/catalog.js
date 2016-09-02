import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import Header from './header';
import CatalogItem from './catalog_item';
import { products as catalogProducts } from '../../data/catalog';
import { connect } from 'react-redux';
import { fetchProducts } from '../../modules/catalog';
import { addToCart } from '../../modules/cart';

class Catalog extends Component {
  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  componentDidMount(){
    if(this.props.products.length > 0) return;
    this.props.fetchProducts();

  }

  handleAddToCart(product){
    this.props.addToCart(product);
    this.props.router.push('/cart');
  }

  render(){
    const items = this.props.products.map(p =>
      <CatalogItem
        key={ p.id }
        product={ p }
        onAddToCart={ this.handleAddToCart } />);

    const { errors, isFetching } = this.props;

    return (
      <div className="catalog">
        <Header text='Productos' />
        <div className="catalog-list">
          { Object.keys(errors).length > 0 ? 'Ocurrió un error' : null }
          { isFetching ? 'Cargando productos...' : items }
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errors: PropTypes.object,
  fetchProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  router: PropTypes.object
}

const mapStateToProps = (state) => {
  const products = state.catalog.productIds.map(id => state.catalog.byId[id]);
  return {
    products,
    isFetching: state.catalog.isFetching,
    errors: state.catalog.errors
  }
}

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Catalog)
);
