import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import emojione from "emojione";
import Materialize from "materialize-css";
import { connect } from "react-redux";
// import * as $ from 'jquery';
import { Navbar } from "react-bootstrap";

import * as Actions from "../actions";
import ChatContent from "./ChatContent";
import Login from "./Login";
import ChatInput from "./ChatInput";
import ChatNav from "./ChatNav";
import "./app.css";

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
        this.ws.addEventListener("message", e => {
            this.props.receiveMessage(e.data);
            const el = document.getElementById("chat-messages");
            el.scrollTop = el.scrollHeight; // auto-scroll to bottom
        });
        // this.ws.onmessage = e => {
        //     console.log("e: ", e);
        //     this.props.receiveMessage(e.data);
        //     const el = document.getElementById("chat-messages");
        //     el.scrollTop = el.scrollHeight; // auto-scroll to bottom
        // };

        this.ws.onopen = evt => {
            console.log("open", evt);
        };
    }

    componentWillReceiveProps(nextProps, _nextContext) {
        const { new_message, messages, email, username, joined } = nextProps;

        this.setState({
            newMsg: new_message,
            messages,
            email,
            username,
            joined
        });
    }

    send() {
        const { newMsg, email, username } = this.state;
        console.log("username: ", username);
        console.log("email: ", email);
        console.log("newMsg: ", newMsg);
        if (newMsg !== "") {
            this.ws.send(
                JSON.stringify({
                    email,
                    username,
                    message: newMsg
                })
            );

            // reset newMsg
            this.props.handleChangeNewMessage("");
        }
    }

    join() {
        const { email, username } = this.state;

        if (!email) {
            Materialize.toast("You must enter an email", 2000);
            return;
        }

        if (!username) {
            Materialize.toast("You must choose a username", 2000);
            return;
        }

        this.props.handleJoin(true);
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
                    <ChatNav />
                </header>
                <main id="app">
                    <ChatContent messages={this.state.messages} />
                    {userInput}
                </main>
                <footer className="page-footer" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, Actions)(App);
