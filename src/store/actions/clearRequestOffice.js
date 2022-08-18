import {CLEAR_REQUEST_OFFICE} from "../types";

export const clearRequestOffice = () => {
    return {
        type: CLEAR_REQUEST_OFFICE,
        payload: [],
    }
}