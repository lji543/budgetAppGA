import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Michael Scott',
      budget: 10
    }
  }

  render() {

    return (
      <div >
        <h2>Hey {this.state.name}!</h2>
        <h3>You have an income of {this.state.budget} dollars.</h3>
        <p>(you could use that to open a lemonade stand)</p>


        <h3>Update Your Profile</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.name}
            onChange={ e => this.setState({name:e.target.value})}
          />
        </form>

        <h3>Update Your Budget</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.budget}
            onChange={ e => this.setState({budget:e.target.value})}
          />

        </form>

      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    // the cart (in state.cart) comes from the rootReducer
    profile: state.profile
  }
}

export default connect(mapStateToProps, profileActions)(Profile);
