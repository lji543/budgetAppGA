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

const expenses = [
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
]

class App extends Component {

  render() {
    console.log(expenses)
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
                <Route
                  exact
                  path="/"
                  render={() => {
                    return <Home name="Laura" />;
                  }}
                />
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/expenses" component={() => <Expenses expenses={expenses}/>} />
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
