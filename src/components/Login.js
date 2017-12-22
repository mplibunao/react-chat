import React from "react";

function Login({ updateEmail, email, updateUsername, username, handleLogin }) {
    return (
        <div className="row">
            <div className="input-field col s8">
                <input
                    type="email"
                    onChange={e => updateEmail(e)}
                    value={email}
                    placeholder="Email"
                />
            </div>
            <div className="input-field col s8">
                <input
                    type="text"
                    onChange={e => updateUsername(e)}
                    value={username}
                    placeholder="Username"
                />
            </div>
            <div className="input-field col s4">
                <button
                    className="waves-effect waves-light btn"
                    onClick={() => handleLogin()}
                >
                    <i className="material-icons right">done</i>
                    Join
                </button>
            </div>
        </div>
    );
}

export default Login;
