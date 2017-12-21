import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    console.log(0);
    this.ws = new WebSocket("ws://localhost:8000/ws");
    // this.ws = new WebSocket('ws://' + window.location.host + '/ws');
    console.log(1);
    this.ws.onmessage = (e) => {
      console.log(2);
      //e.data
      console.log('e.data: ', e.data);
      //this.setState({ message:  })
    }

    this.ws.onOpen = (e) => {
      console.log(3);
    }
  }

  render() {
    return (
      <div>Hi</div>
    );
  }
}
