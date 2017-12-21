function addMessage(msg) {
    return {
        type: "ADD_MESSAGE",
        msg
    };
}

function email(email) {
    return {
        type: "RECV_EMAIL",
        email
    };
}

function username(username) {
    return {
        type: "RECV_USERNAME",
        username
    };
}

function newMessage(new_message) {
    return {
        type: "RECV_NEW_MESSAGE",
        new_message
    };
}

function joined(joined) {
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
    return dispatch => {
        dispatch(newMessage(new_message));
    };
}

export function handleChangeEmail(email) {
    return dispatch => {
        dispatch(email(email));
    };
}

export function handleChangeUsername(username) {
    return dispatch => {
        dispatch(username(username));
    };
}

export function handleJoin(status) {
    return dispatch => {
        dispatch(joined(status));
    };
}
