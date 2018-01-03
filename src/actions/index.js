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
    return (dispatch, getState) => {
        localStorage.setItem("email", getState().email);
        localStorage.setItem("username", getState().username);
    };
}

export function receiveMessage(msg) {
    return (dispatch, getState) => {
        dispatch(addMessage(msg));
    };
}

export function handleChangeNewMessage(new_message) {
    return dispatch => {
        dispatch(receive_newMessage(new_message));
    };
}

export function handleChangeEmail(email) {
    return dispatch => {
        dispatch(receive_email(email));
    };
}

export function handleChangeUsername(username) {
    return dispatch => {
        dispatch(receive_username(username));
    };
}

export function handleJoin(status) {
    return dispatch => {
        dispatch(receive_joined(status));
        dispatch(saveCredentials());
    };
}

export function addUser(payload) {
    return dispatch => {
        dispatch(receive_user(payload));
    };
}

export function updateUser(payload) {
    console.log(0);
    return dispatch => {
        dispatch(update_user(payload));
    };
}
