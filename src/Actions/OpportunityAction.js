import { UPDATE_OPPORTUNITY_SUCCESS } from "constant/Constants";
import HttpStatus from 'http-status-codes';
import { updateOppertunityAction } from "api/updateChallenge";
import { getOpportunities } from "./Actions";

// action for fetching access token
export function putOpportunityAction(guid, bodyJson) {
    return (dispatch) => {
        saveOrUpdateOpportunityAction(dispatch, guid, bodyJson);
    }
}

function saveOrUpdateOpportunityAction(dispatch, guid, bodyJson) {
    updateOppertunityAction({guid, bodyJson})
        .then((response) => {
            if (response.status === HttpStatus.OK) {
                dispatch(updateOperationActionSuccess(response.payload))
                dispatch(getOpportunities({}))
            }
        })
}

export function updateOperationActionSuccess(data) {
    return {
        type: UPDATE_OPPORTUNITY_SUCCESS,
        data
    }
}