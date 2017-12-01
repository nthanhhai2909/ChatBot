import {LOGIN_SUCCESS} from '../constants/ActionType'

export const loginSuccess = (id, token) => ({
    type: LOGIN_SUCCESS,
    id,
    token,
})