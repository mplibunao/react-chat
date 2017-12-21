import React, { Component } from "react";
import { Button } from "react-bootstrap";
import emojione from "emojione";
import Materialize from "materialize-css";
import { connect } from "react-redux";
// import * as $ from 'jquery';

import * as Actions from "../actions";
import ChatContent from "./ChatContent";
import Login from "./Login";
import ChatInput from "./ChatInput";
import "./app.css";
const md5 = require("md5");

class App extends Component {
    constructor(props) {
        super(props);

        this.ws = null;
        this.state = {
            newMsg: props.new_message, // contains new message to be sent to server
            messages: props.messages, // A running list of chat messages displayed on screen
            email: props.email, // Email address used for grabbing avatar
            username: props.username, // Our username
            joined: props.joined
        };
    }

    componentDidMount() {
        this.ws = new WebSocket("ws://localhost:8000/ws");
        this.ws.onmessage = e => {
            this.props.receiveMessage(e.data);
            const el = document.getElementById("chat-messages");
            el.scrollTop = el.scrollHeight; // auto-scroll to bottom
        };

        this.ws.onopen = evt => {
            console.log("open", evt);
        };
    }

    componentWillRecieveProps(nextProps, _nextContext) {
        const { newMsg, messages, email, username, joined } = nextProps;

        this.setState({
            newMsg,
            messages,
            email,
            username,
            joined
        });
    }

    // send() {
    //   if (this.state.newMsg !== '') {
    //     this.ws.send(
    //       JSON.stringify({
    //         email: this.state.email,
    //         username: this.state.username,
    //         message: $('<p>').html(this.state.newMsg).text() // strip out html
    //       })
    //     );

    //     // reset newMsg
    //     this.setState({ newMsg: '' });
    //   }
    // }

    // join() {
    //   const { email, username } = this.state;

    //   if (!email) {
    //     Materialize.toast('You must enter an email', 2000);
    //     return;
    //   }

    //   if (!username) {
    //     Materialize.toast('You must choose a username', 2000);
    //     return;
    //   }

    //   this.setState(prevState => {
    //     return {
    //       email: $('<p>').html(prevState.email).text(),
    //       username: $('<p>').html(prevState.username).text(),
    //       joined: true
    //     }
    //   });
    // }

    gravatarURL(email) {
        const hash = md5(email).toString();
        return `http://www.gravatar.com/avatar/${hash}`;
    }

    updateEmail(e) {
        this.props.handleChangeEmail(e.target.value);
    }

    updateUsername(e) {
        this.props.handleChangeUsername(e.target.value);
    }

    updateMsg(e) {
        this.props.handleChangeNewMessage(e.target.value);
    }

    render() {
        let userInput;
        if (this.state.joined) {
            userInput = (
                <ChatInput
                    value={this.state.newMsg}
                    sendMessage={() => this.send()}
                    updateMsg={e => this.updateMsg(e)}
                />
            );
        } else {
            userInput = (
                <Login
                    updateEmail={e => this.updateEmail(e)}
                    updateUsername={e => this.updateUsername(e)}
                    handleLogin={() => this.join()}
                    username={this.state.username}
                    email={this.state.email}
                />
            );
        }
        return (
            <div>
                <header>
                    <nav className="nav-wrapper">
                        <a href="/" className="brand-logo right">
                            Shore Chat App
                        </a>
                    </nav>
                </header>
                {/* <main id="app">
          <ChatContent html={this.state.chatContent} />
          {userInput}
        </main> */}
                <footer className="page-footer" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, Actions)(App);
