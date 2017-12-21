import React, { Component } from "react";

class ChatInput extends Component {
    _handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.sendMessage();
        }
    }
    render() { 
        return (
            <div className="row">
                <div className="input-field col s8">
                    <input type="text"
                        onKeyPress={e => this._handleKeyPress(e)}
                        onChange={e => this.props.updateMsg(e)}
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
}
 
export default ChatInput;