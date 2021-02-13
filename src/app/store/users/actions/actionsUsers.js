import axios from "axios";
import {FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST, FETCH_USERS_FAILED} from "../constants/constantUsers";

export const usersRequestCreator = (limit = 20) =>{
    const func = async (dispatch) =>{
        dispatch({type: FETCH_USERS_REQUEST})
        try {
            const response = await axios.get(`https://randomuser.me/api/?results=${limit}`)
            const {data} = response;
            const addNewValue = data.results.map((item => {
                item.marked = false
                return (item)
            }));

            dispatch({type: FETCH_USERS_SUCCESS, payload: addNewValue})
        }
        catch (error) {
            dispatch({type: FETCH_USERS_FAILED, payload: error})
        }
    }
    return func;
};