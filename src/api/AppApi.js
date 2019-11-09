import axios from 'axios';
import { handleOkResponse, handleError } from '../utils';

export const fetchOpportunities = ({ bodyJson }) =>
    axios.get(
        "/opportunity",
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