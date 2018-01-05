// import { Dispatch } from "../../../../../.cache/typescript/2.6/node_modules/@types/react-redux";

// @flow

type Dispatch = (action: Action | Dispatch) => Dispatch | void;
type GetState = () => Object;

type Action = Object;

function addMessage(msg) {
    return {
        type: "ADD_MESSAGE",
        msg
    };
}

function receive_email(email) {
    return {
        type: "RECV_EMAIL",
        email
    };
}

function receive_username(username) {
    return {
        type: "RECV_USERNAME",
        username
    };
}

function receive_newMessage(new_message) {
    return {
        type: "RECV_NEW_MESSAGE",
        new_message
    };
}

function receive_joined(joined) {
    return {
        type: "RECV_JOINED",
        joined
    };
}

function receive_user(payload) {
    const { id, email, username, time } = payload;
    return {
        type: "ADD_USER",
        id,
        email,
        username,
        time
    };
}

function update_user(payload) {
    const { id, email, username, time } = payload;
    return {
        type: "UPDATE_USER",
        id,
        email,
        username,
        time
    };
}

function saveCredentials() {
    return (dispatch: Dispatch, getState: GetState) => {
        localStorage.setItem("email", getState().email);
        localStorage.setItem("username", getState().username);
    };
}

function delete_user(payload: Object) {
    return (dispatch: Dispatch, getState: GetState) => {
        const { id, type } = payload;
        const { users } = getState();
        const newUsers = users.filter(user => {
            return user.id !== id && user.type !== type;
        });
    };
}

export function receiveMessage(msg: Object) {
    return (dispatch: Dispatch, getState: GetState) => {
        dispatch(addMessage(msg));
    };
}

export function handleChangeNewMessage(new_message: String) {
    return (dispatch: Dispatch) => {
        dispatch(receive_newMessage(new_message));
    };
}

export function handleChangeEmail(email: String) {
    return (dispatch: Dispatch) => {
        dispatch(receive_email(email));
    };
}

export function handleChangeUsername(username: String) {
    return (dispatch: Dispatch) => {
        dispatch(receive_username(username));
    };
}

export function handleJoin(status: String) {
    return (dispatch: Dispatch) => {
        dispatch(receive_joined(status));
        dispatch(saveCredentials());
    };
}

export function addUser(payload: Object) {
    return (dispatch: Dispatch) => {
        dispatch(receive_user(payload));
    };
}

export function updateUser(payload: Object) {
    return (dispatch: Dispatch) => {
        dispatch(update_user(payload));
    };
}

export function changeTo(to: Number) {
    return (dispatch: Dispatch, getState: GetState) => {
        const { users } = getState();
        const toUser = users.find(user => user.id === to);
        const name = toUser ? toUser.username : "All";
        const payload = {
            name,
            user: toUser ? toUser : {}
        };
        dispatch({ type: "CHANGE_TO", payload });
    };
}

export function deleteUser(payload: Object) {
    return (dispatch: Dispatch) => {
        dispatch(delete_user(payload));
    };
}
