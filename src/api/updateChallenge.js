import axios from "axios/index";
import { handleOkResponse, handleError } from "../utils";

export const updateChallengeAction = ({ guid, bodyJson }) =>
    axios.put(
        `/benchpool/challenges/${guid}/perform/action`,
        bodyJson,
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }
    ).then(data => handleOkResponse(data)).catch(error => {
        console.log("Error while adding group:", error);
        return handleError(error);
    });


export const updateOppertunityAction = ({ guid, bodyJson }) =>
    axios.put(
        `/benchpool/opportunity/${guid}/perform/action`,
        bodyJson,
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }
    ).then(data => handleOkResponse(data)).catch(error => {
        console.log("Error while adding group:", error);
        return handleError(error);
    });