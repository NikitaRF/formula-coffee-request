import {GET_FORM_KITCHEN} from "../types";
import firebase from "firebase";
const db = firebase.firestore();

export const getFormKitchen = () => {
    const getBlankFormBarOnDB = async () => {

            const result = await db.collection('/requests/kitchen/form').get().then((querySnapshot) => {
                let arr = []
                querySnapshot.forEach((doc) => {
                    //console.log('DOC', doc.data())
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    // arr.push({[doc.id]: doc.data()})
                    arr.push(doc.data())
                });
                return arr

            }).catch((error) => {
                console.log("Error getting document:", error);
            })
            return result
    }

    return async dispatch => {
        const dataBlankForm = await getBlankFormBarOnDB()
        //console.log('dataBlankFormKitchen', dataBlankFormKitchen)
        dispatch({
            type: GET_FORM_KITCHEN,
            payload: dataBlankForm
        })
    }
}