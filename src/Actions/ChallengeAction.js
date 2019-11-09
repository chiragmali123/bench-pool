import { UPDATE_CHALLENGE_SUCCESS } from "constant/Constants";
import { updateChallengeAction } from "api/updateChallenge";
import HttpStatus from 'http-status-codes';

// action for fetching access token
export function putChallengeAction(guid, bodyJson) {
    return (dispatch) => {
        saveOrUpdateChallengeAction(dispatch, guid, bodyJson);
    }
}

function saveOrUpdateChallengeAction(dispatch, guid, bodyJson) {
    updateChallengeAction({guid, bodyJson})
        .then((response) => {
            if (response.status === HttpStatus.OK) {
                dispatch(updateChallengeActionSuccess(response.payload))
            }
        })
}

export function updateChallengeActionSuccess(data) {
    return {
        type: UPDATE_CHALLENGE_SUCCESS,
        data
    }
}