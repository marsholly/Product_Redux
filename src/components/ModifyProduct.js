import React, { Component } from 'react';
import { Table, Button, Input, Label } from 'semantic-ui-react';
import { Dialog, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import * as ProductActions from '../actions/ProductActions';

class ModifyProduct extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      editName: '',
      editSupplier: '',
      editQuantity: 0,
      editSalePrice: 0,
      id:'',
    }
  }

  handleOpen = (product) => {
    this.setState({open: true});
    const { id, productName, quantity, salePrice, supplier } = product;
    this.setState({
      editName: productName,
      editSupplier: supplier,
      editQuantity: quantity,
      editSalePrice: salePrice,
      id
    })
  };

  handleClose = () => {
    this.setState({open: false});
  };

  removeProduct = (id) => {
    this.props.removeProduct(id);
  }

  updateProduct = () => {
    const { id, editName, editSupplier, editQuantity, editSalePrice } = this.state;
    let editProduct = {
      productName: editName,
      supplier: editSupplier,
      quantity: editQuantity,
      salePrice: editSalePrice,
      id
    }
    console.log('editProduct:', editProduct);
    this.handleClose;
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.updateProduct}
      />,
    ];
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
                <Button color="teal" onClick={() => this.handleOpen(product)}>Update</Button>
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
        <Dialog
          title="Update Product"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Input
            label={{ icon: 'asterisk' }}
            labelPosition='left corner'
            placeholder='Product Name'
            value = {this.state.editName}
            onChange = {e=>this.setState({editName: e.target.value})}
          />&nbsp;&nbsp;&nbsp;
          <Input
            icon='users'
            iconPosition='left'
            placeholder='Supplier'
            value = {this.state.editSupplier}
            onChange = {e=>this.setState({editSupplier: e.target.value})}
          />
          <br/> <br/>
          <Input
            type = 'number'
            min = '0'
            label={{ icon: 'asterisk' }}
            labelPosition='left corner'
            placeholder='Quantity'
            value = {this.state.editQuantity}
            onChange = {e=>this.setState({editQuantity: e.target.value})}
          />&nbsp;&nbsp;&nbsp;
          <Input labelPosition='right'>
            <Label basic>$</Label>
            <input
              type='text'
              placeholder='Sale Price'
              type = 'number'
              min = '0'
              value = {this.state.editSalePrice}
              onChange = {e=>this.setState({editSalePrice: e.target.value})}
            />
            <Label>.00</Label>
          </Input>
        </Dialog>
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
    updateProduct(editProduct) {
      dispatch(ProductActions.updateProduct(editProduct));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProduct);
