import React from "react";

function ChatInput({ sendMessage, updateMsg, value }) {
    const _handleKeyPress = event => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="col-sm-12">
            <input
                type="text form-control"
                onKeyPress={e => _handleKeyPress(e)}
                onChange={e => updateMsg(e)}
                value={value}
            />
        </div>
    );
}

export default ChatInput;
