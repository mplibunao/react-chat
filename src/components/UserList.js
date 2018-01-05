import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions";

const UserList = ({ users, changeTo }) => {
    const userList = users.map((user, i) => (
        <div className="users" key={i} onClick={() => changeTo(user.id)}>
            <span>{user.username}</span>
        </div>
    ));

    return (
        <div className="col-sm-2 user-list">
            <div className="input-container">{userList}</div>
        </div>
    );
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, Actions)(UserList);
