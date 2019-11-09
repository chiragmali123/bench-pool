import { FETCHING_OPPORTUNITIES } from "constant/Constants"
import { FETCHING_OPPORTUNITIES_SUCCESS } from "constant/Constants"
import { FETCHING_CHALLENGES_SUCCESS } from "constant/Constants"

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
        default:
            return state
    }
}