import {CHANGTEXT_EMAIL,
        CHANGTEXT_MESSAGE,
        CHANGTEXT_PASSWORD, 
        CHANGTEXT_CONFIRM} from '../constants/ActionType'

const signup = (state = {}, action) => {
    switch(action.type){
        case '@@redux/init': 
            console.log("Reux innit", state);
            return state;
        case CHANGTEXT_EMAIL:
            return Object.assign({}, state)
        default:
            return state
    }
}
export default signup