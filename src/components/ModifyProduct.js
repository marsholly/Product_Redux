import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ProductActions from '../actions/ProductActions';

class ModifyProduct extends Component {
  render() {
    let { products } = this.props;
    console.log('products:', products);
    return (
      <div className="container">
        ModifyProduct
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.all,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts(products) {
      dispatch(ProductActions.getAllProducts(products));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProduct);
