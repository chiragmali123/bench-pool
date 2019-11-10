import { USER_AUTHENTICATION_ACTION } from "constant/Constants";
import { isArrayEmpty } from "utils";
import HttpStatus from 'http-status-codes';
import { fetchPool } from "api/AppApi";
// action for fetching access token
export function authenticateUser({ userEmail }) {
    return (dispatch) => {
        getPoolData(dispatch, { userEmail });
    }
}

function getPoolData(dispatch, { userEmail }) {
    fetchPool({})
        .then((response) => {
            if (response.status === HttpStatus.OK) {
                let userFound = null;
                if (!isArrayEmpty(response.payload)) {
                    userFound = response.payload.find(user => user.email === userEmail)
                }
                dispatch(dispactSignInAction({ user: userFound, loginResult: userFound ? true : false }))
            }
            else {
                dispatch(dispactSignInAction({ user: null, loginResult: false }))
            }
        })
}

export function dispactSignInAction(data) {
    return {
        type: USER_AUTHENTICATION_ACTION,
        data
    };
}