import {GET_FORM_KITCHEN} from "../types";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../database/firebase";

export const getFormKitchen = () => {
    const getBlankFormBarOnDB = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'requests/kitchen/form'))
            let arr = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                arr.push(doc.data())
            });
            return arr
        } catch (error) {
            console.log("Error getting document:", error);
        }
    }

    return async dispatch => {
        const dataBlankForm = await getBlankFormBarOnDB()
        dispatch({
            type: GET_FORM_KITCHEN,
            payload: dataBlankForm
        })
    }
}
