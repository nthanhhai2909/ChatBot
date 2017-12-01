import {LOGIN_SUCCESS} from '../constants/ActionType'


const initialState = {

}
const loginReducer  = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return [...state, action.id]
        default:
                return state
    }

}
export default loginReducer