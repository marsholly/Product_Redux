import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';
import uuid from 'uuid';
import * as ProductActions from '../actions/ProductActions';

class NewProduct extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const productName = this.productName.getValue();
    const supplier = this.supplier.getValue();
    const quantity = this.quantity.getValue();
    const salePrice = this.salePrice.getValue();
    const newProduct = {
      productName,
      supplier,
      quantity,
      salePrice,
      id: uuid(),
    };
    this.props.createProduct(newProduct);
    document.infoForm.reset();
  }

  render() {
    return (
      <div className="container">
        <div className="productForm">
          <form name="infoForm" onSubmit={this.onSubmit}>
            <TextField
              floatingLabelText="Product Name"
              fullWidth={true}  //eslint-disable-line
              ref={(productName) => { this.productName = productName; }}
            /><br />
            <TextField
              floatingLabelText="Supplier"
              fullWidth={true}  //eslint-disable-line
              ref={(supplier) => { this.supplier = supplier; }}
            /><br />
            <TextField
              type="number"
              min="0"
              floatingLabelText="Quantity"
              fullWidth={true}  //eslint-disable-line
              ref={(quantity) => { this.quantity = quantity; }}
            /><br />
            <TextField
              type="number"
              min="0"
              floatingLabelText="Sale Price ($)"
              fullWidth={true}  //eslint-disable-line
              ref={(salePrice) => { this.salePrice = salePrice; }}
            /><br /><br />
            <RaisedButton
              label="ADD"
              backgroundColor="#B3E5FC"
              fullWidth={true} //eslint-disable-line
              type="submit"
            />
          </form>
        </div>
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
    createProduct(product) {
      dispatch(ProductActions.createProduct(product));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);


// ProductActions.createProduct(); --> returns object with type and payload
// this.props.createProduct(); --> dispatches object with type and payload to reducers (sends a message to the store)
