import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../actions/expensesActions';

class Expenses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expenses: this.props.expenses,
      message: '',
      // newExpense: {
      //   name: '',
      //   amount: 0
      // }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let name = document.getElementById("newexpensename").value;
    let amount = document.getElementById("newexpenseamount").value;
    let expenses = [...this.state.expenses];

    if (name && amount) {
      expenses.push({type:name,amount:amount});
      this.setState({
        expenses:expenses,
        message:'',
        // newExpense: {name:'',amount:0}
      });
    } else {
      this.setState({message:"Please enter a name and amount"});
    }

  }

  handleChange = e => {
    // e.preventDefault();
    let expenses = [...this.state.expenses];
    expenses.map(exp => {
      if (exp.type===e.target.name) {
        return exp.amount = e.target.value;
      }
    })

    this.setState({expenses:expenses});
  }

  handleNewExpChange = e => {
    //
  }

  // componentDid

  render() {
    // console.log(this.props)
    return (
      <div className="">
        {this.state.expenses.map((exp,idx) => {
          return (
            <div key={idx}>
              <span>{exp.type}&nbsp;</span>
              <input
                name={exp.type}
                value={exp.amount}
                onChange={e => this.props.handleChange(e)}
              />
            </div>
          )
        })}

        <form onSubmit={this.props.handleSubmit} >
          <input id="newexpensename"
            placeholder="Name"
            name="name"

          />
          <input id="newexpenseamount"
            placeholder="Amount"
            name="amount"
          />
          <input type="submit"
            value="Add New Expense"
          />
        </form>
      </div>
    );
  }
}
//
// function mapStateToProps(state, props) {
//   console.log(state,props)
//   return {
//     expenses: state.expenses
//   }
// }
//
// export default connect(mapStateToProps, expensesActions)(Expenses);

export default Expenses
