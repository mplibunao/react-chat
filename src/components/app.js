import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import emojione from "emojione";
const md5 = require('md5');
import Materialize from "materialize-css";
import * as $ from 'jquery';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.ws = null;
    this.state = {
      newMsg: '', // contains new message to be sent to server
      chatContent: '', // A running list of chat messages displayed on screen
      email: '', // Email address used for grabbing avatar
      username: '', // Our username
      joined: false,
    };
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://localhost:8000/ws");
    this.ws.onmessage = evt => {
      const msg = JSON.parse(evt.data);
      this.setState(prevState => {
        const chatContent = prevState.chatContent + `<div><img src="${this.gravatarURL(msg.email)}">${msg.username} </div> ${emojione.toImage(msg.message)} <br/>`
        return {
          chatContent
        };
      });
      const el = document.getElementById('chat-messages');
      el.scrollTop = el.scrollHeight; // auto-scroll to bottom
    }
    
    this.ws.onopen = evt => {
      console.log("open", evt);
    }
  }

  send() {
    if (this.state.newMsg !== '') {
      this.ws.send(
        JSON.stringify({
          email: this.state.email,
          username: this.state.username,
          message: $('<p>').html(this.state.newMsg).text() // strip out html
        })
      );

      // reset newMsg
      this.setState({ newMsg: '' });
    }
  }

  join() {
    const { email, username } = this.state;

    if (!email) {
      Materialize.toast('You must enter an email', 2000);
      return;
    }

    if (!user) {
      Materialize.toast('You must choose a username', 2000);
      return;
    }

    this.setState(prevState => {
      return {
        email: $('<p>').html(prevState.email).text(),
        username: $('<p>').html(prevState.username).text(),
        joined: true
      }
    });
  }

  gravatarURL(email) {
    const hash = md5(email).toString();
    return `http://www.gravatar.com/avatar/${hash}`;
  }


  render() {
    //this.ws
    console.log('this.ws: ', this.ws);
    return (
      <div>Hi <Button>Sup</Button> </div>
    );
  }
}
