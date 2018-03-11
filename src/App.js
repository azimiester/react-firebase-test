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
      messages: null
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.chatRef = database.ref('/chat');
  }



  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      //may be use pick from loadash
      const user = { email: currentUser.email, displayName: currentUser.displayName, photoURL: currentUser.photoURL };
      this.setState({ currentUser: user });
      
    });
    this.chatRef.on('value', (snapshot) => {
      this.setState({ messages: snapshot.val() });
    });
  }

  handleNewMessage(message) {
    const newMessage = {
      message: message,
      user: this.state.currentUser,
      time: new Date().getTime()
    };
    console.log(newMessage);
    //this.setState({messages : [...this.state.messages , newMessage]});
    this.chatRef.push(newMessage);
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
