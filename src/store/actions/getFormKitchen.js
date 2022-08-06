import {GET_FORM_KITCHEN} from "../types";
import firebase from "firebase";
const db = firebase.firestore();

export const getFormKitchen = () => {
    const getBlankFormKitchenOnDB = async () => {

            const result = await db.collection("/requests/kitchen/form").get().then((querySnapshot) => {
                let arr = []
                querySnapshot.forEach((doc) => {
                    console.log('DOC', doc.data())
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



        // const blankFormKitchen = db.collection("/requests/kitchen").doc('form');
        // const result = await blankFormKitchen.get().then((doc) => {
        //
        //     if (doc.exists) {
        //         // console.log("Document data:", doc.data().historyOfOrder);
        //         return doc.data()
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch((error) => {
        //     console.log("Error getting document:", error);
        // });
    }

    return async dispatch => {
        const dataBlankFormKitchen = await getBlankFormKitchenOnDB()
        //console.log('dataBlankFormKitchen', dataBlankFormKitchen)
        dispatch({
            type: GET_FORM_KITCHEN,
            payload: dataBlankFormKitchen
        })
    }
}