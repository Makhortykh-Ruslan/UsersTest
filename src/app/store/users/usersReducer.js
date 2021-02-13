import {FETCH_USERS_FAILED, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from './constants/constantUsers'
const initialState = {
    users: [],
    loading: false,
    errors: null,
    markedUsers: []
};

export const userReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case  FETCH_USERS_REQUEST :
            return(
                {...state, loading: true}
            )
        case FETCH_USERS_SUCCESS :

            return (
                {...state, loading: false, users: payload}
            )
        case FETCH_USERS_FAILED :
            return (
                {...state, loading: false, errors: payload}
            )
        case 'ADD_MARKED_USER' :
            const newUsers = [...state.markedUsers, {...payload}]
            return (
                {...state, markedUsers: newUsers}
            )
        default : return state
    }
};