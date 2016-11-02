import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as ProductActions from '../actions/ProductActions';

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

export default connect(mapStateToProps)(ModifyProduct);
