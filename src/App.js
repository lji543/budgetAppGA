// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from "react-redux";

// Styles
import "./App.css";

//Components
import Expenses from "./components/Expenses";
import Profile from "./components/Profile";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);

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
      ],
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

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/expenses">Expenses</Link>
                    {/* <span> ({Object.keys(this.props.cart).length})</span> */}
                  </li>
                </ul>
              </nav>
            </header>

            <div className="content">
              <Switch>
                <Route exact path="/" component={() => <Home expenses={this.state.expenses} />} />
                <Route path="/profile" component={Profile} />
                <Route path="/expenses" component={() => <Expenses handleSubmit={this.handleSubmit} handleChange={this.handleChange} expenses={this.state.expenses}/>} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    expenses: state.expenses
  };
}

export default connect(mapStateToProps)(App);
