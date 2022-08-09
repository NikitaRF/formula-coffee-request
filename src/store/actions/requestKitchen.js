import {REQUEST_KITCHEN} from "../types";

export const requestKitchen = (Item, val) => {
    const result = {
            name: Item.name,
            unit: Item.unit,
            count: val,
        }
    // console.log('RESULT', result)
    return {
        type: REQUEST_KITCHEN,
        payload: result,
    }
}