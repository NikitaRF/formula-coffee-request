import {REQUEST_OFFICE} from "../types";

export const requestOffice= (Item, val) => {
    const result = {
        name: Item.name,
        unit: Item.unit,
        count: val,
    }
    // console.log('RESULT', result)
    return {
        type: REQUEST_OFFICE,
        payload: result,
    }
}