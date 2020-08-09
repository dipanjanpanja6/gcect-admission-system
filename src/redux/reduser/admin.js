import {LOGIN,  AUTH,USER,} from '../type'

const initialState = {
    login: {}, 
     auth:null, 
    user:'',


}

export default function (state = initialState, actions) {
    switch (actions.type) {

      
        case USER:
            return {
                ...state,
                user: actions.payload
            }
        case AUTH:
            return {
                ...state,
                auth: actions.payload
            }
      
        case LOGIN:
            return {
                ...state,
                login: actions.payload
            }
       


        default:
            return state

    }
}