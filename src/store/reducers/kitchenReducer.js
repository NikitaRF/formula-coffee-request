import {GET_FORM} from '../types'


const initialState = {
    form: [],
    loading: false,
}

export const kitchenReducer = (state = initialState, action) => {
    switch (action.type) {
          case GET_FORM: return {
            ...state,
            form: action.payload
        }
    }
    return state
}