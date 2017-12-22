import React, { Component } from "react";
const md5 = require("md5");

export class ChatContent extends Component {
    gravatarURL(email) {
        const hash = md5(email).toString();
        return `http://www.gravatar.com/avatar/${hash}`;
    }

    render() {
        // emojione.toImage(message.message);
        const messages = this.props.messages.map((message, i) => {
            return (
                <div className="chip" key={i}>
                    <img src={this.gravatarURL(message.email)} alt={i}/>
                    {message.username}
                    <span>{message.message}</span>
                </div>
            );
        });
        
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
