import * as action from '../actions/index';

describe('it should test the action creator', () => {
    
    it('should test the handleChangeEmail method', () => {
        expect.action.handleChangeEmail("abc@gmail.com").toEqual("abc@gmail.com")
    });

    it('should test the handleChangeUsername method', () => {
        expect.action.handleChangeUsername("abc").toEqual("abc")
    })
})
