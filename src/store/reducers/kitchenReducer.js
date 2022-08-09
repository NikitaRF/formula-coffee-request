import {GET_FORM_KITCHEN} from '../types'


const initialState = {
    formKitchen: [],
}

export const kitchenReducer = (state = initialState, action) => {
    switch (action.type) {
          case GET_FORM_KITCHEN: return {
            ...state,
              formKitchen: action.payload
        }
    }
    return state
}