import {USER_AUTH} from "../types";
import {auth} from "../../database/firebase";

export const userAuth = () => {
    return dispatch => {
        const userIsAuth = auth.currentUser.displayName
        dispatch({
            type: USER_AUTH,
            payload: userIsAuth
        })
    }
}
