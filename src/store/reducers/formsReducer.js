import {
    GET_FORM_KITCHEN,
    REQUEST_KITCHEN,
    CLEAR_REQUEST_KITCHEN,
    GET_FORM_BAR,
    REQUEST_BAR,
    CLEAR_REQUEST_BAR
} from '../types'



const initialState = {
    formKitchen: [],
    formBar: [],
    requestKitchen: [],
    requestBar: [],
}

export const formsReducer = (state = initialState, action) => {
    switch (action.type) {
          case GET_FORM_KITCHEN: return {
            ...state,
              formKitchen: action.payload
          }
        case GET_FORM_BAR: return {
            ...state,
            formBar: action.payload
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

        case REQUEST_BAR:
            const foundElBar = state.requestBar.findIndex(el => el.name == action.payload.name);
            if (foundElBar == -1){
                return {
                    ...state,
                    requestBar: [...state.requestBar, action.payload]
                }
            }
            const currentRequestBar = state.requestBar.slice()
            if (action.payload.count === '') {
                const currentRequestBarNoEmptyItem = currentRequestBar.filter(el => el.name !== action.payload.name)
                console.log(currentRequestBarNoEmptyItem)
                return {
                    ...state,
                    requestBar: currentRequestBarNoEmptyItem
                }
            }
            currentRequestBar[foundElBar] = action.payload
            return {
                ...state,
                requestBar: currentRequestBar
            }

        case CLEAR_REQUEST_KITCHEN: return {
            ...state,
            requestKitchen: action.payload
        }
        case CLEAR_REQUEST_BAR: return {
            ...state,
            requestBar: action.payload
        }
    }
    return state
}