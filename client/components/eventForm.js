import React, { Component } from "react";
import TextFieldGroup from "./common/TextFieldGroup";
import { connect } from "react-redux";
import { createEvent } from "../components/actions/eventActions";
import PropTypes from "prop-types";

class EventForm extends Component {
  state = {
    title: "",
    errors: {},
    isLoadig: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createEvent(this.state);
  };
  render() {
    const { title, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create new Game Event</h1>

        <TextFieldGroup
          name="title"
          error={errors.title}
          type="text"
          label="Title"
          id="title"
          placeholder=""
          handleChange={this.handleChange}
        />

        <button type="submit" className="btn btn-primary">
          {" "}
          Create{" "}
        </button>
      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { createEvent }
)(EventForm);
