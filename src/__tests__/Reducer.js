import reducer from '../reducers/index';

describe("it should test redux", () => {
    
    it ("should return the new message", () => {
        expect(
            reducer({}, {
                type: "RECV_NEW_MESSAGE", 
                new_message: "hello World"
            }).new_message
        ).toEqual(
            "hello World"
        );
    });

    it ("should return the email address", () => {
        expect(
            reducer({}, {
                type: "RECV_EMAIL", 
                email: "abc@gmail.com"
            }).email
        ).toEqual(
            "abc@gmail.com"
        );
    });

    it ("should return the username", () => {
        expect(
            reducer({}, {
                type: "RECV_USERNAME", 
                username: "abc"
            }).username
        ).toEqual(
            "abc"
        );
    });

    it ("should return the true", () => {
        expect(
            reducer({}, {
                type: "RECV_JOINED", 
                joined: true
            }).joined
        ).toEqual(
            true
        );
    });

    it ("should return the messages", () => {
        expect(
            reducer({}, {
                type: "ADD_MESSAGE", 
                msg: {username: "abc", message: "Hello"}
            }).messages
        ).toEqual(
            [{username: "abc", message: "Hello"}]
        );
    });

    it ("should return the users", () => {
        expect(
            reducer({}, {
                type: "ADD_USER", 
                id: 1, 
                username: "abc", 
                email: "abc@gmail.com"
            }).users
        ).toEqual(
            [{id: 1, username: "abc", email: "abc@gmail.com"}]
        );
    });

})