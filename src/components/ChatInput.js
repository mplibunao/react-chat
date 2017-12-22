import React from "react";

function ChatInput({ sendMessage, updateMsg, value }) {
    const _handleKeyPress = event => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="row">
            <div className="input-field col s8">
                <input
                    type="text"
                    onKeyPress={e => _handleKeyPress(e)}
                    onChange={e => updateMsg(e)}
                    value={value}
                />
            </div>
            <div className="input-field col s4">
                <button className="waves-effect waves-light btn">
                    <i className="material-icons right">chat</i>
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatInput;
