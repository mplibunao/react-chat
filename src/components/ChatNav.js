import React from "react";

const ChatNav = class extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">{this.props.children}</div>
            </nav>
        );
    }
};

export default ChatNav;
