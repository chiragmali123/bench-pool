import { FETCHING_OPPORTUNITIES_SUCCESS } from "constant/Constants"
import { FETCHING_CHALLENGES_SUCCESS } from "constant/Constants"
import { FETCHING_POOL_SUCCESS } from "constant/Constants"
import { USER_AUTHENTICATION_ACTION } from "constant/Constants"

const initialState = {
    challengesData: [],
    opportunitiesData: [],
    poolData: []
}

//Main Reducer
export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_OPPORTUNITIES_SUCCESS:
            return {
                ...state,
                opportunitiesData: action.data ? action.data : []
            }
        case FETCHING_CHALLENGES_SUCCESS:
            return {
                ...state,
                challengesData: action.data ? action.data : []
            }
        case FETCHING_POOL_SUCCESS:
            return {
                ...state,
                poolData: action.data ? action.data : []
            }
        case USER_AUTHENTICATION_ACTION:
            return {
                ...state,
                user: action.data ? action.data.user : null,
                loginResult: action.data ? action.data.loginResult : null
            }
        default:
            return state
    }
}