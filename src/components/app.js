import React, { Component } from 'react';
import { Button } from "react-bootstrap";

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
    this.ws.onmessage = evt => {
      console.log('evt: ', evt);
    }
    
    this.ws.onopen = evt => {
      console.log("open", evt);
    }
  }


  render() {
    //this.ws
    console.log('this.ws: ', this.ws);
    return (
      <div>Hi <Button>Sup</Button> </div>
    );
  }
}
