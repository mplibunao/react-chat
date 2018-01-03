import React from "react";

function ChatInput({ sendMessage, updateMsg, value }) {
    const _handleKeyPress = event => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div>
            <div className="form-group">
                <div className="label">To: All</div>
                <input
                    type="text"
                    className="form-control col-sm-12"
                    onKeyPress={e => _handleKeyPress(e)}
                    onChange={e => updateMsg(e)}
                    value={value}
                />
            </div>
        </div>
    );
}

export default ChatInput;
