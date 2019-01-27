import React, { Component } from "react";
import FlashMessageList from "../components/flash/flashMessageList";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <FlashMessageList />
        <div className="jumbotron">
          <h1 className="display-4">Hello, This is HomePage!</h1>

          <hr className="my-4" />
          <p>This is a simple App made Using React</p>
        </div>
      </>
    );
  }
}

export default Home;
