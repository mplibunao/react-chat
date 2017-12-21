import { combineReducers } from "redux";

function new_message(state = "", action) {
    switch (action.type) {
        case "RECV_NEW_MESSAGE":
            return action.new_message;
        default:
            return state;
    }
}

function email(state = "", action) {
    switch (action.type) {
        case "RECV_EMAIL":
            return action.email;
        default:
            return state;
    }
}

function username(state = "", action) {
    switch (action.type) {
        case "RECV_USERNAME":
            return action.username;
        default:
            return state;
    }
}

function joined(state = false, action) {
    switch (action.type) {
        case "RECV_JOINED":
            return action.joined;
        default:
            return state;
    }
}

function messages(state = [], action) {
    switch (action.type) {
        case "ADD_MESSAGE":
            console.log("[...state, action.msg]: ", [...state, action.msg]);
            return [...state, action.msg];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    email,
    joined,
    new_message,
    messages,
    username
});

export default rootReducer;
