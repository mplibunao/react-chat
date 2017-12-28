import React from "react";

function Login({ updateEmail, email, updateUsername, username, handleLogin }) {
    return (
        <div className="pull-right col-sm-7">
            <div className="pull-right login">
                <button
                    className="btn btn-default"
                    onClick={() => handleLogin()}
                >
                    Join
                </button>
            </div>
            <div className="form-group pull-right login">
                <input
                    type="email"
                    className="form-control"
                    onChange={e => updateEmail(e)}
                    value={email}
                    placeholder="Email"
                />
            </div>
            <div className="form-group pull-right login">
                <input
                    type="text"
                    className="form-control"
                    onChange={e => updateUsername(e)}
                    value={username}
                    placeholder="Username"
                />
            </div>
        </div>
    );
}

export default Login;
