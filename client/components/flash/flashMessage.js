import React, { Component } from "react";

import PropTypes from "prop-types";

class FlashMessage extends Component {
  state = {};

  getClassName = type => {
    if (type === "success") {
      return "alert alert-success";
    } else if (type === "error") {
      return "alert alert-danger";
    }
  };

  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  };

  render() {
    console.log("inside flashMessage ", JSON.stringify(this.props.message));
    const { id, type, text } = this.props.message;
    return (
      <div className={this.getClassName(type)}>
        {text}
        <button className="close" onClick={this.onClick}>
          &times;
        </button>
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
