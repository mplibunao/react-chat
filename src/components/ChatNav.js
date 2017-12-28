import React from "react";
import { Navbar } from "react-bootstrap";

const ChatNav = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">{this.props.children}</div>
            </nav>
        );
    }
};

export default ChatNav;
