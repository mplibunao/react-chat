// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import * as actions from '../actions/index';
// import fetchMock from 'fetch-mock'

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// describe('actions', () => {
    
//     // afterEach(() => {
//     //     fetchMock.reset()
//     //     fetchMock.restore()
//     // })

//     it('change email when handleChangeEmail is done', () => {
       
//         const text = "abc@gmail.com"
//         const store = mockStore({email: ""})

//         const fn = store.dispatch(actions.handleChangeEmail(text))
//         console.log('fn: ', fn);
        
//         // expect(fn).toBeA('function')
//         // const dispatch = expect.createSpy();
//         // const getState = () => ({ email: "abc@gmail.com" });
//         // fn(dispatch, getState);
//         // expect(dispatch).toHaveBeenCalledWith({ type: actions.RECV_EMAIL });
//         const expectedAction = 
//             { type: "RECV_EMAIL", email: text }
        
//         // console.log("actions.receive_email(text)", store.dispatch(actions.handleChangeEmail(text)));
//         expect(store.dispatch(actions.handleChangeEmail(text))).toEqual(expectedAction)
//         // console.log(actions.handleChangeEmail(text));
//         // console.log(store.getActions());
//         // return store.dispatch(actions.handleChangeEmail(text)).then(() => {
//         //     expect(store.getActions()).toEqual(expectedAction)   
//         // })
//     });

//     // it('should test the handleChangeUsername method', () => {
//     //     expect.action.handleChangeUsername("abc").toEqual("abc")
//     // })
// })
