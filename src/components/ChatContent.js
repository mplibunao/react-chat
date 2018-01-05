import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions";

const md5 = require("md5");

const ChatContent = ({ messages, to, users }) => {
    console.log("to: ", to);
    const gravatarURL = email => {
        const hash = md5(email).toString();
        return `http://www.gravatar.com/avatar/${hash}`;
    };

    const filterMessages = () => {
        if (to.name === "All") {
            return messages.filter(message => {
                return message.type === "MESSAGE_TO_ALL";
            });
        } else {
            return messages.filter(message => {
                return (
                    (message.type === "ADD_MESSAGE" &&
                        message.to === to.user.id) ||
                    (message.type === "ADD_MESSAGE" &&
                        message.id === to.user.id)
                );
            });
        }
    };

    const mapMessages = messageArr =>
        messageArr.map((message, i) => (
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
        ));

    // const allMessages = messages.map((message, i) => {
    //     return (
    //         <div className="message" key={i}>
    //             <img
    //                 className="avatar"
    //                 src={gravatarURL(message.email)}
    //                 alt={i}
    //             />
    //             <span> [{message.time}]</span>
    //             <span> {message.username}: </span>
    //             <span>{message.message}</span>
    //         </div>
    //     );
    // });

    const filteredMessages = filterMessages();
    console.log("filteredMessages: ", filteredMessages);

    return (
        <div className="col-sm-10 message-list">
            <div id="chat-messages" className="input-container">
                {mapMessages(filteredMessages)}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, Actions)(ChatContent);
