import {GET_MENU, LOAD_INDICATOR, ADD_TO_BASKET, DELETE_ITEM_FROM_BASKET, CLEAR_BASKET, GET_ORDERS} from '../types'


const initialState = {
    menu: [],
    basket: [],
    orders: [],
    loading: false,
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU: return {
            ...state,
            menu: action.payload
        }
        case GET_ORDERS: return {
            ...state,
            orders: action.payload
        }
        case LOAD_INDICATOR: return {
            ...state,
            loading: action.payload
        }
        case ADD_TO_BASKET:
            const foundEl = state.basket.findIndex(el => el.name == action.payload.name);
            console.log(foundEl)
            if (foundEl == -1){
                return {
                    ...state,
                    basket: [...state.basket, action.payload]
                }
            }
            const currentBasket = state.basket.slice()
            currentBasket[foundEl] = action.payload
            console.log("В редьюсере сейчас вот этот массив", currentBasket)
            // if (action.payload.count == 0) {
            //
            // }
            return {
            ...state,
            basket:  currentBasket
        }
        case DELETE_ITEM_FROM_BASKET:
            console.log('DELETE_ITEM_FROM_BASKET', action.payload)
            const curBasket = state.basket.slice()
            const result = curBasket.filter((item => item.name !== action.payload))

            return {
            ...state,
            basket: result
        }
        case CLEAR_BASKET: return {
            ...state,
            basket: action.payload,
        }
    }
    return state
}

function updateArrayItem(arr, id, params){
    //обходим весь массив и создаем новый что бы реакт понял что массив изменился
    const newArr = arr.map(item => {
        if(item.id === id){
            //если это наш елемент то заменяем в нем только переданные параметры
            return {...item, params}
        }
        // если не наш то просто добавляем его в уже новый массив
        return item
    })

    return newArr
}