import React from "react";
const md5 = require("md5");

const ChatContent = ({ messages }) => {
    const gravatarURL = email => {
        const hash = md5(email).toString();
        return `http://www.gravatar.com/avatar/${hash}`;
    };

    // emojione.toImage(message.message);
    const allMessages = messages.map((message, i) => {
        return (
            <div className="message" key={i}>
                <img
                    className="avatar"
                    src={gravatarURL(message.email)}
                    alt={i}
                />
                <span> {message.username}: </span>
                <span>{message.message}</span>
            </div>
        );
    });

    return (
        <div className="col-sm-10">
            <div id="chat-messages" className="input-container">
                {allMessages}
            </div>
        </div>
    );
};

export default ChatContent;
