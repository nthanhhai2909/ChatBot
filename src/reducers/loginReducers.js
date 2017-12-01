import {LOGIN_SUCCESS} from '../constants/ActionType'


const initialState = {

}
const loginReducer  = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return [...state, {id:action.id, token: action.token}]
        default:
            return state
    }

}
export default loginReducer