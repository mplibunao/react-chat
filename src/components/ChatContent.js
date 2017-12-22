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
            <div className="chip" key={i}>
                <img src={gravatarURL(message.email)} alt={i} />
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
                        {allMessages}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatContent;
