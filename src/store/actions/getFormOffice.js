import {GET_FORM_OFFICE} from "../types";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../database/firebase";

export const getFormOffice = () => {
    const getBlankFormBarOnDB = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'requests/office/form'))
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
            type: GET_FORM_OFFICE,
            payload: dataBlankForm
        })
    }
}
