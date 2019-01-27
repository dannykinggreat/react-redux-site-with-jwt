import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
//import FlashMessageList from "../components/flash/flashMessageList";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar />
        {/* <FlashMessageList /> */}
      </div>
    );
  }
}

export default App;
