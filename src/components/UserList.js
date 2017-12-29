import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions";

const UserList = ({ users }) => {
    const usersList = users.map(user => (
        <div className="users">
            <span>{user.username}</span>
        </div>
    ));

    return (
        <div className="col-sm-2">
            <div className="input-container">{usersList}</div>
        </div>
    );
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, Actions)(UserList);
