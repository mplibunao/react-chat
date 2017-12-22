import React, { Component } from "react";
import emojione from "emojione";
const md5 = require("md5");

export class ChatContent extends Component {
    gravatarURL(email) {
        const hash = md5(email).toString();
        return `http://www.gravatar.com/avatar/${hash}`;
    }

    render() {
        // emojione.toImage(message.message);
        const messages = this.props.messages.map((message, i) => {
            console.log("message: ", message);
            //emojione.toImage(message.message);
            console.log(
                "emojione.toImage(message.message): ",
                emojione.toImage(message.message)
            );
            return (
                <div className="chip" key={i}>
                    <img src={this.gravatarURL(message.email)} />
                    {message.username}
                    <span>{message.message}</span>
                </div>
            );
        });
        console.log("messages: ", messages);
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card horizontal">
                        <div id="chat-messages" className="card-content">
                            {messages}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatContent;
