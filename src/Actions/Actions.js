import HttpStatus from 'http-status-codes';
import { showGlobalFailure } from '../utils';
import { fetchOpportunities } from 'api/AppApi';
import { FETCHING_OPPORTUNITIES_SUCCESS } from 'constant/Constants';
import { saveOpportunity } from 'api/saveOpportunity';
import { FETCHING_CHALLENGES_SUCCESS } from 'constant/Constants';
import { fetchChallenges } from 'api/AppApi';
import { saveChallenge } from 'api/saveChallenge';
import { fetchPool } from 'api/AppApi';
import { FETCHING_POOL_SUCCESS } from 'constant/Constants';

// action for fetching access token
export function getOpportunities(bodyJson) {
    return (dispatch) => {
        getOpportunitiesData(dispatch, bodyJson);
    }
}

function getOpportunitiesData(dispatch, bodyJson) {
    fetchOpportunities({ bodyJson })
        .then((response) => {
            if (response.status === HttpStatus.OK)
                dispatch(setOpportunitiesSuccess(response.payload))
            else {
                dispatch(showGlobalFailure(response.status));
            }
        })
}

export function setOpportunitiesSuccess(data) {
    return {
        type: FETCHING_OPPORTUNITIES_SUCCESS,
        data
    }
}

export function saveOpportunities(bodyJson) {   
    return (dispatch) => {
        saveOpportunitiesData(dispatch, bodyJson);
    }
}

function saveOpportunitiesData(dispatch, bodyJson) {
    saveOpportunity({ ...bodyJson })
        .then((response) => {
            // if (response.status === HttpStatus.OK)
            //     dispatch(setOpportunitiesSuccess(response.payload))
        })
}
// action for fetching access token
export function getChallenges({ bodyJson }) {
    return (dispatch) => {
        getChallengesData(dispatch, bodyJson);
    }
}

function getChallengesData(dispatch, bodyJson) {
    fetchChallenges({ bodyJson })
        .then((response) => {
            if (response.status === HttpStatus.OK)
                dispatch(getChallengesSuccess(response.payload))
            else {
                dispatch(showGlobalFailure(response.status));
            }
        })
}

export function getChallengesSuccess(data) {
    return {
        type: FETCHING_CHALLENGES_SUCCESS,
        data
    }
}


// action for fetching access token
export function saveChallenges(bodyJson) {
    return (dispatch) => {
        saveChallengesData(dispatch, bodyJson);
    }
}

function saveChallengesData(dispatch, bodyJson) {
    saveChallenge(bodyJson)
        .then((response) => {
            // if (response.status === HttpStatus.OK)
            //     dispatch(getChallengesSuccess(response.payload))
        })
}
// action for fetching access token
export function getPool(bodyJson) {
    return (dispatch) => {
        getPoolData(dispatch, bodyJson);
    }
}

function getPoolData(dispatch, bodyJson) {
    fetchPool({ bodyJson })
        .then((response) => {
            if (response.status === HttpStatus.OK)
                dispatch(getPoolSuccess(response.payload))
            else {
                dispatch(showGlobalFailure(response.status));
            }
        })
}

export function getPoolSuccess(data) {
    return {
        type: FETCHING_POOL_SUCCESS,
        data
    }
}
