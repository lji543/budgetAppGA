import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../actions/expensesActions';


class Expenses extends Component {

  render() {
    return (
      <div className="">
        Expenses
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    // the cart (in state.cart) comes from the rootReducer
    expenses: state.expenses
  }
}

export default connect(mapStateToProps, expensesActions)(Expenses);
