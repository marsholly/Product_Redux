import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ABActions from '../actions/ABActions';

class NewProduct extends Component {
  render() {
    let { x, todos } = this.props
    return (
      <div className="container">

      </div>
    )
  }
};

function mapStateToProps(state) {
  return{
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    x(data) {
      dispatch(createTodo(data));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
