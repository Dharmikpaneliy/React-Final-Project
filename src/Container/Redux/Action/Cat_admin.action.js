import * as ActionType from "../ActionType";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase";

export const getdata = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, "cat"));

        let data = [];

        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });

        console.log(data);
        dispatch({ type: ActionType.CAT_ADMIN, payload: data })
    } catch (error) {
        dispatch({ type: ActionType.ERROR_ADMIN, payload: error.message })
    }
}

export const postdata = (data) => async (dispatch) => {
    console.log(data);
    try {

        const randomstr = Math.floor(Math.random() * 100000).toString();
        const imagesRef = ref(storage, 'cat/' + randomstr);

        uploadBytes(imagesRef, data.file)
            .then((snapshot) => {
                getDownloadURL((snapshot.ref))
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "cat"), {
                            name: data.name,
                            file: url,
                            fileName: randomstr
                        });
                        dispatch({
                            type: ActionType.POST_CAT_ADMIN, payload: {
                                id: docRef.id,
                                name: data.name,
                                file: url,
                                fileName: randomstr
                            }
                        })
                    });
            });
    } catch (error) {
        dispatch({ type: ActionType.ERROR_ADMIN, payload: error.message })
    }
}

export const deletedata = (data) => async (dispatch) => {
    console.log(data);
    try {

        const desertRef = ref(storage, 'cat/'+ data.fileName);

        
        deleteObject(desertRef).then(async() => {
            await deleteDoc(doc(db, "cat", data.id));

            dispatch({type : ActionType.DELETE_ADMIN, payload: data.id})
        }).catch((error) => {
            dispatch({ type: ActionType.ERROR_ADMIN, payload: error.message })
        });

        // return deletedoctordata(id)
        //     .then(dispatch({ type: ActionType.DELETE_DOCTOR, payload: id }))
    } catch (error) {
        dispatch({ type: ActionType.ERROR_ADMIN, payload: error.message })
    }
}

export const updatecart = (data) => async (dispatch) => {
    try {

        const doctorRefedit = doc(db, "cat", data.id);
        if (typeof data.file === "string") {
            await updateDoc(doctorRefedit, {
                name: data.name,
                file: data.url,
            });
            dispatch({ type: ActionType.UPDATE_ADMIN, payload: data })

        } else {
            const doctorRefdel = ref(storage, 'cat/' + data.fileName);

            deleteObject(doctorRefdel).then(async () => {
                const randomstr = Math.floor(Math.random() * 100000).toString();
                const doctorRef = ref(storage, 'cat/' + randomstr);

                uploadBytes(doctorRef, data.file)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                await updateDoc(doctorRefedit, {
                                    category: data.category,
                                    name: data.name,
                                    file: url,
                                    fileName: randomstr
                                });
                                dispatch({ type: ActionType.UPDATE_ADMIN, payload: { ...data, fileName: randomstr, file: url, } })
                            })
                    }
                    )
            })
        }
    } catch (error) {
        dispatch({ type: ActionType.ERROR_ADMIN, payload: error.message })
    }
}