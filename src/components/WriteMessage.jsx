import React, { Component } from "react";
import { sendMessage } from "../utils/utilities";

class WriteMessage extends Component {
  state = {
    message: ""
  };
  messageChange = event => {
    this.setState({ message: event.target.value });
  };
  sendMessage = async event => {
    event.preventDefault();
    const response = await sendMessage(
      this.props.chatroom,
      this.props.username,
      this.state.message
    );
    this.setState({
      message: ""
    });
    console.log(response);
  };
  render() {
    return (
      <form onSubmit={this.sendMessage}>
        <input
          type="text"
          value={this.state.message}
          onChange={this.messageChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default WriteMessage;
