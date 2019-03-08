import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';

class Profile extends Component {

  render() {
    return (
      <div className="">
        Profile
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    // the cart (in state.cart) comes from the rootReducer
    profile: state.profile
  }
}

export default connect(mapStateToProps, profileActions)(Profile);
