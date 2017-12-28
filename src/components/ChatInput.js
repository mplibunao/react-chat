import React from "react";

function ChatInput({ sendMessage, updateMsg, value }) {
    const _handleKeyPress = event => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="">
            <div className="">
                <input
                    type="text"
                    onKeyPress={e => _handleKeyPress(e)}
                    onChange={e => updateMsg(e)}
                    value={value}
                />
            </div>
            <div className="">
                <button className="btn btn-default">Send</button>
            </div>
        </div>
    );
}

export default ChatInput;
