import HttpStatus from 'http-status-codes';
import { showGlobalFailure } from '../utils';
import { fetchOpportunities } from 'api/AppApi';
import { FETCHING_OPPORTUNITIES_SUCCESS } from 'constant/Constants';

// action for fetching access token
export function getOpportunities({ bodyJson }) {
    return (dispatch) => {
        getOpportunitiesData(dispatch);
    }
}

function getOpportunitiesData(dispatch, bodyJson) {
    fetchOpportunities({ bodyJson })
        .then((response) => {
            if (response.status === HttpStatus.OK)
                dispatch(sendAccessToken(response.payload))
            else {
                dispatch(showGlobalFailure(response.status));
            }
        })
}

export function getOpportunitiesSuccess(data) {
    return {
        type: FETCHING_OPPORTUNITIES_SUCCESS,
        data
    }
}
