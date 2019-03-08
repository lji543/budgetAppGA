import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../actions/expensesActions';

class Expenses extends Component {

  constructor() {
    super();

    this.state = {
      expenses: [
        {
          type: "Rent",
          amount: 0
        },
        {
          type: "Utilities",
          amount: 0
        },
        {
          type: "Entertainment",
          amount: 0
        },
        {
          type: "Groceries",
          amount: 0
        },
        {
          type: "Cable/Internet",
          amount: 0
        }
        // {
        //   rent: 0
        // },
        // {
        //   utilities: 0
        // },
        // {
        //   entertainment: 0
        // },
        // {
        //   groceries: 0
        // },
        // {
        //   cable: 0
        // },
      ]
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit ',e)

    // const { value, name }

    // if (e.target.value)
  }

  handleChange = e => {
    // e.preventDefault();
    let expenses = [...this.state.expenses];
    // [[e.target.name]:e.target.value]
    // console.log(expenses)
    expenses.map(exp => {
      if (exp.type===e.target.name) {
        return exp.amount = e.target.value;
      }
    })

    this.setState({expenses:expenses});
  }

  render() {
    console.log(this.state.expenses)
    return (
      <div className="container-expenses">


        {this.state.expenses.map((exp,idx) => {
          return (
            <div key={idx}>
              <span>{exp.type}&nbsp;</span>
              <input
                name={exp.type}
                value={exp.amount}
                onChange={e => this.handleChange(e)}
              />
            </div>
          )
        })}

        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Name"
          />
          <input
            placeholder="Amt"
          />
          <input type="submit"
            value="Add New Expense"
          />
        </form>
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

// name={exp.type}
// value={exp.amount}
// onChange={e => this.handleChange(e)}
