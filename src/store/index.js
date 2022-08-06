import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {userReducer} from "./reducers/userReducer";
import {kitchenReducer} from "./reducers/kitchenReducer";


const rootReducer = combineReducers({
    user: userReducer,
    menu: kitchenReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
