import {LOGIN_SUCCESS} from '../constants/ActionType'

export const getID = id => ({
    type: LOGIN_SUCCESS,
    id,
})