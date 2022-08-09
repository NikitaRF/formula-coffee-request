import {CLEAR_REQUEST_KITCHEN} from "../types";

export const clearRequestKitchen = () => {
    return {
        type: CLEAR_REQUEST_KITCHEN,
        payload: [],
    }
}