import React from "react";

function Login({ updateEmail, email, updateUsername, username, handleLogin }) {
    const handleKeyPress = event => {
        if (event.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <div className="pull-right col-sm-4">
            <div className="form-group login">
                <input
                    type="email"
                    className="form-control"
                    onChange={e => updateEmail(e)}
                    value={email}
                    placeholder="Email"
                    onKeyPress={e => handleKeyPress(e)}
                />
            </div>
            <div className="form-group login">
                <input
                    type="text"
                    className="form-control"
                    onChange={e => updateUsername(e)}
                    value={username}
                    placeholder="Username"
                    onKeyPress={e => handleKeyPress(e)}
                />
            </div>
            <div className=" login">
                <button
                    className="btn btn-default"
                    onClick={() => handleLogin()}
                >
                    Join
                </button>
            </div>
        </div>
    );
}

export default Login;
