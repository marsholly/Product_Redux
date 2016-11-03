import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as ProductActions from '../actions/ProductActions';

class ModifyProduct extends Component {
  constructor() {
    super();
    this.removeProduct = this.removeProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  removeProduct(id) {
    this.props.removeProduct(id);
  }

  editProduct(product) {
    
  }

  render() {
    const { products } = this.props;
    let productsBlock;
    if (products) {
      productsBlock = products.map((product) => {
        const { id, productName, quantity, salePrice, supplier } = product;
        return (
          <Table.Row key={id}>
            <Table.Cell>{productName}</Table.Cell>
            <Table.Cell>{supplier}</Table.Cell>
            <Table.Cell>{quantity}</Table.Cell>
            <Table.Cell>{salePrice}</Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button color="orange" onClick={() => this.removeProduct(id)}>Delete</Button>
                <Button.Or />
                <Button color="teal" onClick={() => this.editProduct(product)}>Update</Button>
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        );
      });
    } else {
      productsBlock = <Table.Row />;
    }
    return (
      <div className="container">
        <Table color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Supplier</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Sale Price</Table.HeaderCell>
              <Table.HeaderCell>Modify</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {productsBlock}
          </Table.Body>
        </Table>
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
    removeProduct(id) {
      dispatch(ProductActions.removeProduct(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProduct);
