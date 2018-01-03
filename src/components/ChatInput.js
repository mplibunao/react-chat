import React from "react";
import { connect } from "react-redux";

import * as Actions from "../actions";

function ChatInput({ sendMessage, updateMsg, value, to, users }) {
    console.log("to: ", to);
    const _handleKeyPress = event => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    const setLabel = toId => {
        return toId <= 0 ? "All" : findUser(toId);
    };

    const findUser = toId => {
        const userResult = users.find(user => user.id === toId);
        console.log("toId: ", toId);
        return userResult ? userResult.username : "All";
    };

    return (
        <div>
            <div className="form-group">
                <div className="label">To: {setLabel(to)}</div>
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
