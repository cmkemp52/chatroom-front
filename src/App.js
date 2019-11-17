import React from "react";
import Chatroom from "./components/chat";

class App extends React.Component {
  state = {
    roomName: null
  };

  render() {
    return (
      <div className="App">
        <Chatroom />
      </div>
    );
  }
}

export default App;
