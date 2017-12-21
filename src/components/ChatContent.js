import React, { Component } from "react";
import emojione from "emojione";
const md5 = require("md5");

export class ChatContent extends Component {
    gravatarURL(email) {
        const hash = md5(email).toString();
        return `http://www.gravatar.com/avatar/${hash}`;
    }

    render() {
        const messages = this.props.messages.map(message => {
            <div className="chip">
                <img src={this.gravatarURL(message.email)} />
                {message.username}
            </div>;
            {
                emojione.toImage(message.message);
            }
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
