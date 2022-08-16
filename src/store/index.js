import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {userReducer} from "./reducers/userReducer";
import {formsReducer} from "./reducers/formsReducer";


const rootReducer = combineReducers({
    user: userReducer,
    menu: formsReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
