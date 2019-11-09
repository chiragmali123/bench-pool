import axios from "axios/index";
import { handleOkResponse, handleError } from "../utils";
import { opportunityPath } from "constant/Constants";

//Add Group API
export const saveOpportunity = (bodyJson) =>
axios.post(
    opportunityPath,
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