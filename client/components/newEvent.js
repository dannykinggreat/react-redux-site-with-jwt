import React, { Component } from "react";
import EventForm from "./eventForm";
class NewEvent extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-4 col-md-offset-4">
          <EventForm />
        </div>
      </div>
    );
  }
}

export default NewEvent;
