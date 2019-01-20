import React, { Component } from "react";
import PropTypes from "prop-types";
import FlashMessage from "./flashMessage";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../actions/flashMessages";

class FlashMessageList extends Component {
  state = {};
  render() {
    console.log(
      "outside flashmessageList ",
      JSON.stringify(this.props.messages)
    );

    console.log("inside flashmessageList ", this.props.messages);

    // const messages = this.props.messages.map(message => {
    //   console.log("inside flashmessage map ", JSON.stringify(message));
    //   return (
    //     <FlashMessage
    //       key={message.id}
    //       message={message}
    //       deleteFlashMessage={this.props.deleteFlashMessage}
    //     />
    //   );
    // });
    //following block of code is similiar to above commented block of code with reduced code lines!!
    const messages = this.props.messages.map(message => (
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={this.props.deleteFlashMessage}
      />
    ));

    return messages;
  }
}
const mapStateToProps = state => {
  console.log("map state to props ", JSON.stringify(state));
  return {
    messages: state.flashMessages
  };
};

FlashMessageList.propTypes = {
  messages: PropTypes.array,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { deleteFlashMessage }
)(FlashMessageList);
