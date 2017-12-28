import React from "react";

function Login({ updateEmail, email, updateUsername, username, handleLogin }) {
    return (
        <div>
            <div className="a">
                <input
                    type="email"
                    onChange={e => updateEmail(e)}
                    value={email}
                    placeholder="Email"
                />
            </div>
            <div className="b">
                <input
                    type="text"
                    onChange={e => updateUsername(e)}
                    value={username}
                    placeholder="Username"
                />
            </div>
            <div className="c">
                <button
                    className="waves-effect waves-light btn"
                    onClick={() => handleLogin()}
                >
                    <i className="">done</i>
                    Join
                </button>
            </div>
        </div>
    );
}

export default Login;
