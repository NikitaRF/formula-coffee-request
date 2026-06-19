import {GET_USERS_INFO} from "../types";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "../../database/firebase";

export const getUserInfo = () => {

    const getUserInfoOnDB = async () => {
        const userUid = auth.currentUser.uid
        const userInfoRef = doc(db, "staffUsers", userUid);

        try {
            const docSnap = await getDoc(userInfoRef)
            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                return docSnap.data()
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        } catch (error) {
            console.log("Error getting document:", error);
        }
    }

    return async dispatch => {
        const userInfo = await getUserInfoOnDB()
        dispatch({
            type: GET_USERS_INFO,
            // Если документа в staffUsers нет — кладём {}, а не undefined,
            // чтобы экраны не падали на userData.jobTitle.
            payload: userInfo || {}
        })
    }
}
