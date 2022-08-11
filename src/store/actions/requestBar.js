import {REQUEST_BAR} from "../types";

export const requestBar = (Item, val) => {
    const result = {
        name: Item.name,
        unit: Item.unit,
        count: val,
    }
    // console.log('RESULT', result)
    return {
        type: REQUEST_BAR,
        payload: result,
    }
}