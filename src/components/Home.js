import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as profileActions from '../actions/profileActions';
import * as expensesActions from '../actions/expensesActions';


class Home extends Component {

  render() {
    console.log(this.props)
    return (
      <div >
        <h3>Our Expenses:</h3>
        <div>
          {this.props.expenses.map((exp,idx) => {
            return (
              <div key={idx}>
               {exp.type}&nbsp;&nbsp;{exp.amount}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;

// function mapStateToProps(state, props) {
//   return {
//     // the cart (in state.cart) comes from the rootReducer
//     cart: state.cart
//   }
// }
//
// export default connect(mapStateToProps, expensesActions)(Home);
