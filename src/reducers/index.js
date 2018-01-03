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
            return [...state, action.msg];
        default:
            return state;
    }
}

function users(state = [], action) {
    switch (action.type) {
        case "ADD_USER": {
            const { id, username, email, time } = action;
            const arr = [...state, { id, username, email, time }];
            return arr;
        }
        case "UPDATE_USER": {
            const { id, username, email, time } = action;
            const a = state.reduce((users, user) => {
                if (user.id === id) {
                    user.username = username;
                    user.email = email;
                    user.time = time;
                }
                users.push(user);
                return users;
            }, []);
            return a;
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    email,
    joined,
    new_message,
    messages,
    username,
    users
});

export default rootReducer;
