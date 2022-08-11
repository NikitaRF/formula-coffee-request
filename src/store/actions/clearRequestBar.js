import {CLEAR_REQUEST_BAR} from "../types";

export const clearRequestBar = () => {
    return {
        type: CLEAR_REQUEST_BAR,
        payload: [],
    }
}