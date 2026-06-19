import { createStore, combineReducers, applyMiddleware } from "redux";
// redux-thunk v3 больше не имеет default-экспорта — только именованный { thunk }.
import { thunk } from 'redux-thunk';
import {userReducer} from "./reducers/userReducer";
import {formsReducer} from "./reducers/formsReducer";


const rootReducer = combineReducers({
    user: userReducer,
    menu: formsReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
