import {GET_FORM_BAR} from "../types";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../database/firebase";

export const getFormBar = () => {
    const getBlankFormBarOnDB = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'requests/bar/form'))
            let arr = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
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
            return arr
        } catch (error) {
            console.log("Error getting document:", error);
        }
    }

    return async dispatch => {
        const dataBlankForm = await getBlankFormBarOnDB()
        dispatch({
            type: GET_FORM_BAR,
            payload: dataBlankForm
        })
    }
}
