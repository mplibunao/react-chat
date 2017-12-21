import React, { Component } from 'react';

export class ChatContent extends Component {
    createMarkup(markupString) {
        return {
            _html: markupString,
        }
    }
    render() { 
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card horizontal">
                        <div id="chat-messages"
                            className="card-content"
                            dangerouslySetInnerHTML={this.createMarkup(this.props.html)}
                        >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default ChatContent;