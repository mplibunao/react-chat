import React from "react";

function Login({ updateEmail, email, updateUsername, username, handleLogin }) {
    return (
        <div className="pull-right">
            <div className="col-sm-5 form-group">
                <input
                    type="email"
                    className="form-control"
                    onChange={e => updateEmail(e)}
                    value={email}
                    placeholder="Email"
                />
            </div>
            <div className="col-sm-5 form-group">
                <input
                    type="text"
                    className="form-control"
                    onChange={e => updateUsername(e)}
                    value={username}
                    placeholder="Username"
                />
            </div>
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => handleLogin()}
                >
                    Join
                </button>
            </div>
        </div>
    );
}

export default Login;
