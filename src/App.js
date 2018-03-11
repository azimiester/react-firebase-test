import React, { Component } from "react";
import "./App.css";
import Messages from "./Messages";
import NewMessage from "./NewMessage";
import SignIn from "./SignIn";
import CurrentUser from "./CurrentUser";
import { auth, database } from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      messages: []
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleSignIn() {
    this.setState({
      currentUser: {
        displayName: "Kamal Memon",
        photoURL:
          "http://lorempixel.com/400/400/animals",
        email: "memonkamal7@gmail.com"
      }
    });
  }
  handleNewMessage(message) {
    const newMessage = {
      message: message,
      user: this.state.currentUser,
      time: new Date().getTime()
    }
    this.setState({messages : [...this.state.messages , newMessage]});
    console.log(this.state.messages);
  }

  render() {
    return (
      <div className="App">
      <div className="App--sidebar">
        {!this.state.currentUser && <SignIn handleSignIn={this.handleSignIn} />}
        {this.state.currentUser && (
          <CurrentUser currentUser={this.state.currentUser} />
        )}
        {this.state.currentUser && (
          <NewMessage handleNewMessage={this.handleNewMessage} />
        )}
      </div>
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
