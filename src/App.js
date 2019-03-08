import React, { Component } from 'react';

import './App.css';

import { connect } from 'react-redux';

import Expenses from './components/Expenses';
// import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Expenses />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(App);
