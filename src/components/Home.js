import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as profileActions from '../actions/profileActions';
import * as expensesActions from '../actions/expensesActions';


class Home extends Component {

  render() {

    return (
      <div >
        {/* <h2>My Cart:</h2>
        {Object.keys(this.props.cart).map((item,idx) => {
          return (
            <div key={idx}>
              {item} ({this.props.cart[item]})
              <button onClick={() => {this.props.addToCart(item)}} >+</button>
              <button onClick={() => {this.props.removeFromCart(item)}} >-</button>
            </div>
          )
        })} */}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    // the cart (in state.cart) comes from the rootReducer
    cart: state.cart
  }
}

export default connect(mapStateToProps, expensesActions)(Home);
