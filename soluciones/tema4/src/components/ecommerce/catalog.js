import React, { Component, PropTypes } from 'react';
import Header from './header';
import CatalogItem from './catalog_item';
import { products as catalogProducts } from '../../data/catalog';
import { connect } from 'react-redux';
import { saveProducts } from '../../modules/catalog';
import { addToCart } from '../../modules/cart';
import { goToCart } from '../../modules/route';

class Catalog extends Component {
  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  componentDidMount(){
    setTimeout(() => {
      this.props.saveProducts(catalogProducts);
    }, 500);
  }

  handleAddToCart(product){
    this.props.addToCart(product);
    this.props.goToCart();
  }

  render(){
    const items = this.props.products.map(p =>
      <CatalogItem
        key={ p.id }
        product={ p }
        onAddToCart={ this.handleAddToCart } />);

    return (
      <div className="catalog">
        <Header text='Productos' />
        <div className="catalog-list">
          { items }
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.array.isRequired,
  saveProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.catalog
  }
}

const mapDispatchToProps = {
  saveProducts,
  addToCart,
  goToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
