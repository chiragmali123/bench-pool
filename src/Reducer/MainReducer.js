import { FETCHING_OPPORTUNITIES } from "constant/Constants"

const initialState = {
    challengesData: [],
    opportunitiesData: [],
    poolData: []
}

//Main Reducer
export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_OPPORTUNITIES:
            return {
                opportunitiesData: action.data ? action.data : []
            }
        default:
            return state
    }
}