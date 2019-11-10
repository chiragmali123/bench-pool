import axios from 'axios';
import { handleOkResponse, handleError } from '../utils';

export const fetchOpportunities = ({ bodyJson }) =>
    axios.post(
        "/benchpool/opportunity/list",
        bodyJson,
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
    ).then(data => handleOkResponse(data)).catch(error => {
        console.log("Error while fetching opportunities:", error);
        return handleError(error);
    });

export const fetchChallenges = ({ bodyJson }) =>
    axios.get(
        "/benchpool/challenges",
        bodyJson,
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
    ).then(data => handleOkResponse(data)).catch(error => {
        console.log("Error while fetching opportunities:", error);
        return handleError(error);
    });

export const fetchPool = ({ bodyJson }) =>
    axios.get(
        "/benchpool/user",
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
    ).then(data => handleOkResponse(data)).catch(error => {
        console.log("Error while fetching opportunities:", error);
        return handleError(error);
    });


export const fetchNotifications = ({ userEmail }) =>
    axios.get(
        "/benchpool/user/activitylog",
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            params: {
                'email': userEmail
            }
        }
    ).then(data => handleOkResponse(data)).catch(error => {
        console.log("Error while fetching opportunities:", error);
        return handleError(error);
    });