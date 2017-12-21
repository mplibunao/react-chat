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

export function receiveMessage(msg) {
    return (dispatch, getState) => {
        dispatch(addMessage(JSON.parse(msg)));
    };
}

export function handleChangeNewMessage(new_message) {
    console.log(0);
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
    };
}
