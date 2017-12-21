import React, { Component } from "react";

export class Login extends Component {
    render() { 
        return (
            <div className="row">
                <div className="input-field col s8">
                    <input type="email"
                        onChange={e => this.props.updateEmail(e)}
                        value={this.props.email}
                        placeholder="Email"
                    />
                </div>
                <div className="input-field col s8">
                    <input type="text"
                        onChange={e => this.props.updateUsername(e)}
                        value={this.props.username}
                        placeholder="Username"
                    />
                </div>
                <div className="input-field col s4">
                    <button
                        className="waves-effect waves-light btn"
                        onClick={this.props.handleLogin}
                    >
                        <i className="material-icons right">done</i>
                        Join
                    </button>
                </div>
            </div>
        );
    }
}
 
export default Login;