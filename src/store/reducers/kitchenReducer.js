import {GET_FORM_KITCHEN, REQUEST_KITCHEN, CLEAR_REQUEST_KITCHEN} from '../types'



const initialState = {
    formKitchen: [],
    requestKitchen: [],
}

export const kitchenReducer = (state = initialState, action) => {
    switch (action.type) {
          case GET_FORM_KITCHEN: return {
            ...state,
              formKitchen: action.payload
          }
          case REQUEST_KITCHEN:
              const foundEl = state.requestKitchen.findIndex(el => el.name == action.payload.name);
              if (foundEl == -1){
                  return {
                      ...state,
                      requestKitchen: [...state.requestKitchen, action.payload]
                  }
              }
            const currentRequestKitchen = state.requestKitchen.slice()
              if (action.payload.count === '') {
                  const currentRequestKitchenNoEmptyItem = currentRequestKitchen.filter(el => el.name !== action.payload.name)
                  console.log(currentRequestKitchenNoEmptyItem)
                  return {
                      ...state,
                      requestKitchen: currentRequestKitchenNoEmptyItem
                  }
              }
            currentRequestKitchen[foundEl] = action.payload
            return {
                ...state,
                requestKitchen: currentRequestKitchen
            }
        case CLEAR_REQUEST_KITCHEN: return {
            ...state,
            requestKitchen: action.payload
        }
    }
    return state
}