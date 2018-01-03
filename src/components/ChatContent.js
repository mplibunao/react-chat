import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions";

const md5 = require("md5");

const ChatContent = ({ messages, to, users }) => {
    const gravatarURL = email => {
        const hash = md5(email).toString();
        return `http://www.gravatar.com/avatar/${hash}`;
    };

    const allMessages = messages.map((message, i) => {
        return (
            <div className="message" key={i}>
                <img
                    className="avatar"
                    src={gravatarURL(message.email)}
                    alt={i}
                />
                <span> [{message.time}]</span>
                <span> {message.username}: </span>
                <span>{message.message}</span>
            </div>
        );
    });

    return (
        <div className="col-sm-10 message-list">
            <div id="chat-messages" className="input-container">
                {allMessages}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, Actions)(ChatContent);
