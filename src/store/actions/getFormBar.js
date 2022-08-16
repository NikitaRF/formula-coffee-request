import {GET_FORM_BAR} from "../types";
import firebase from "firebase";
const db = firebase.firestore();

export const getFormBar = () => {
    const getBlankFormBarOnDB = async () => {

        const result = await db.collection('/requests/bar/form').get().then((querySnapshot) => {
            let arr = []
            querySnapshot.forEach((doc) => {
                //console.log('DOC', doc.data())
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                // arr.push({[doc.id]: doc.data()})
                arr.push(doc.data())

            });
           // Сортировка по категориям. Сначала сортируются существующие категории, если категории нет, идет в конец
            arr.sort(function (a, b) {
                if (b.category === undefined) return -1
                if (a.category > b.category) {
                    return 1;
                }
                if (a.category < b.category) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });
            // console.log('SORTED', arr)
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
            type: GET_FORM_BAR,
            payload: dataBlankForm
        })
    }
}