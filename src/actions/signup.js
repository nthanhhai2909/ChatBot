import {CHANGTEXT_EMAIL,
     CHANGTEXT_MESSAGE, 
     CHANGTEXT_PASSWORD,
      CHANGTEXT_CONFIRM} from '../constants/ActionType'

export const changeTextEmail = text =>(
    {
        type: CHANGTEXT_EMAIL,
        text
    }
)

export const changeTextPassword = text => (
    {
        type: CHANGTEXT_PASSWORD, 
        text
    }
)

export const changeTextComfirm = text => (
    {
        type: CHANGTEXT_CONFIRM,
        text
    }
)

export const changeTextMessage = text => ({
    type: CHANGTEXT_MESSAGE, 
    text
})