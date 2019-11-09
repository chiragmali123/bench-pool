import HttpStatus from 'http-status-codes';

import { FETCHING_DATA_FAILURE } from './Constants/AppConstants';


/**
 * This function will return 503 if no response received from server
 */
export const handleError = err => ({
    status: err.response ? err.response.status : HttpStatus.SERVICE_UNAVAILABLE,
    payload: null,
    code: err.response && err.response.data ? err.response.data.code : null
});

/**
 * This function will handle response received from server
 */
export const handleOkResponse = data => {
    if (data.status === HttpStatus.OK) {
        return {
            status: data.status,
            payload: data.data
        }
    }
}

/**
 * This function will handle no content response from server
 */
export const handleNoContentResponse = data => {
    if (data.status === HttpStatus.NO_CONTENT) {
        return {
            status: data.status
        }
    }
}

/**
 * This function will handle response received from server
 */
export const handleAcceptedResponse = data => {
    if (data.status === HttpStatus.ACCEPTED) {
        return {
            status: data.status,
            payload: data.data
        }
    }
}

//global action for failure redirecting to global error page
export function showGlobalFailure(data) {
    return {
        type: FETCHING_DATA_FAILURE,
        data: data,
    }
}


/**
 * This function check if the input is empty array
 * return true if input is null or undefined or empty or is not an array
 */
export function isArrayEmpty(data) {
    return !(data && (data.constructor === Array) && data.length > 0);
}

/**
 * This function return true if given value is not undefined or null
 * @param {*} value 
 */
export const checkValueExist = (value) => {
    return (!(value === null || value === undefined));
}

/**
 * This function return true if given value is not undefined or null or empty
 * @param {*} value 
 */
export const checkValueNotEmpty = (value) => {
    return (!(value === null || value === undefined || value.toString().trim().length === 0));
}


/**
 * This function sorts given array 
 */
export const getSortedArray = (array) => {
    if (array) {
        return array.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
    }
    return [];
}
