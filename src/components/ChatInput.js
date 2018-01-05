import React from "react";
import { connect } from "react-redux";

import * as Actions from "../actions";

function ChatInput({ sendMessage, updateMsg, value, to, users }) {
    const _handleKeyPress = event => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div>
            <div className="form-group">
                <div className="label">To: {to.name}</div>
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

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, Actions)(ChatInput);
