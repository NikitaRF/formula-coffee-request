import {
    GET_FORM_KITCHEN,
    REQUEST_KITCHEN,
    CLEAR_REQUEST_KITCHEN,
    GET_FORM_BAR,
    REQUEST_BAR,
    CLEAR_REQUEST_BAR,
    GET_FORM_OFFICE, CLEAR_REQUEST_OFFICE, REQUEST_OFFICE
} from '../types'



const initialState = {
    formKitchen: [],
    formBar: [],
    formOffice: [],
    requestUser: [],
    requestBar: [],
    requestOffice: [],
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
        case GET_FORM_OFFICE: return {
            ...state,
            formOffice: action.payload
        }
          case REQUEST_KITCHEN:
              const foundEl = state.requestUser.findIndex(el => el.name == action.payload.name);
              if (foundEl == -1){
                  return {
                      ...state,
                      requestUser: [...state.requestUser, action.payload]
                  }
              }
            const currentRequestKitchen = state.requestUser.slice()
              if (action.payload.count === '') {
                  const currentRequestKitchenNoEmptyItem = currentRequestKitchen.filter(el => el.name !== action.payload.name)
                  console.log(currentRequestKitchenNoEmptyItem)
                  return {
                      ...state,
                      requestUser: currentRequestKitchenNoEmptyItem
                  }
              }
            currentRequestKitchen[foundEl] = action.payload
            return {
                ...state,
                requestUser: currentRequestKitchen
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

        case REQUEST_OFFICE:
            const foundElOffice = state.requestOffice.findIndex(el => el.name == action.payload.name);
            if (foundElOffice == -1){
                return {
                    ...state,
                    requestOffice: [...state.requestOffice, action.payload]
                }
            }
            const currentRequestOffice = state.requestOffice.slice()
            if (action.payload.count === '') {
                const currentRequestOfficeNoEmptyItem = currentRequestOffice.filter(el => el.name !== action.payload.name)
                console.log(currentRequestOfficeNoEmptyItem)
                return {
                    ...state,
                    requestOffice: currentRequestOfficeNoEmptyItem
                }
            }
            currentRequestOffice[foundElOffice] = action.payload
            return {
                ...state,
                requestOffice: currentRequestOffice
            }

        case CLEAR_REQUEST_KITCHEN: return {
            ...state,
            requestUser: action.payload
        }
        case CLEAR_REQUEST_BAR: return {
            ...state,
            requestBar: action.payload
        }
        case CLEAR_REQUEST_OFFICE: return {
            ...state,
            requestOffice: action.payload
        }
    }
    return state
}