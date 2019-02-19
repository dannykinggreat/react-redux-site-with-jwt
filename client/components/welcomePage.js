import React, { Component } from "react";
import { connect } from "react-redux";

class WelcomeUser extends Component {
  state = {};
  render() {
    console.log("Inside user");
    const { currentUser, isAuthenticated } = this.props;
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome {currentUser.username} !!!</h1>

        <hr className="my-4" />
        <p>Thank you for logging in!!!</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state is ", state);
  return {
    currentUser: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(WelcomeUser);
