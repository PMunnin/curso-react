import React, { Component, PropTypes } from 'react';
import Header from './header';
import CatalogItem from './catalog_item';

class Catalog extends Component {
  render(){
    const items = this.props.products.map(p =>
      <CatalogItem
        key={ p.id }
        product={ p }
        onAddToCart={ this.props.onAddToCart } />);

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
  onAddToCart: PropTypes.func.isRequired
}

export default Catalog;
