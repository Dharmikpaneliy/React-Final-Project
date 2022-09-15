import * as ActionType from "../ActionType";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase";

export const getdatapr = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, "Pr"));

        let data = [];

        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });

        console.log(data);
        dispatch({ type: ActionType.PRODUCT_ADMIN, payload: data })
    } catch (error) {
        dispatch({ type: ActionType.ERROR_PRODUCT, payload: error.message })
    }
}

export const postdatapr = (data) => async (dispatch) => {
    console.log(data);
    try {

        const randomstr = Math.floor(Math.random() * 100000).toString();
        const imagesRef = ref(storage, 'Pr/' + randomstr);

        uploadBytes(imagesRef, data.file)
            .then((snapshot) => {
                getDownloadURL((snapshot.ref))
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Pr"), {
                            category: data.category,
                            name: data.name,
                            price: data.price,
                            file: url,
                            fileName: randomstr
                        });
                        dispatch({
                            type: ActionType.POST_PRODUCT_ADMIN, payload: {
                                id: docRef.id,
                                category: data.category,
                                name: data.name,
                                price: data.price,
                                file: url,
                                fileName: randomstr
                            }
                        })
                    });
            });
    } catch (error) {
        dispatch({ type: ActionType.ERROR_PRODUCT, payload: error.message })
    }
}

export const deletedatapr = (data) => async (dispatch) => {
    console.log(data);
    try {

        const desertRef = ref(storage, 'Pr/'+ data.fileName);

        
        deleteObject(desertRef).then(async() => {
            await deleteDoc(doc(db, "Pr", data.id));

            dispatch({type : ActionType.DELETE_PRODUCT, payload: data.id})
        }).catch((error) => {
            dispatch({ type: ActionType.ERROR_PRODUCT, payload: error.message })
        });

        // return deletedoctordata(id)
        //     .then(dispatch({ type: ActionType.DELETE_DOCTOR, payload: id }))
    } catch (error) {
        dispatch({ type: ActionType.ERROR_PRODUCT, payload: error.message })
    }
}

export const updatecartpr = (data) => async (dispatch) => {
    console.log(data)
    try {
        const doctorRefedit = doc(db, "Pr/", data.id);
        if (typeof data.file === "string") {
            await updateDoc(doctorRefedit, {
                category: data.category,
                price: data.price,
                name: data.name,
                file: data.file,
            });
            dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data })

        } else {
            const doctorRefdel = ref(storage, 'Pr/' + data.fileName);

            deleteObject(doctorRefdel).then(async () => {
                const randomstr = Math.floor(Math.random() * 100000).toString();
                const doctorRef = ref(storage, 'Pr/' + randomstr);

                uploadBytes(doctorRef, data.file)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                await updateDoc(doctorRefedit, {
                                    category: data.category,
                                    price: data.price,
                                    name: data.name,
                                    file: url,
                                    fileName: randomstr
                                });
                                dispatch({ type: ActionType.UPDATE_PRODUCT, payload: { ...data, fileName: randomstr, file: url, } })
                            })
                    }
                    )
            })
        }
    } catch (error) {
        dispatch({ type: ActionType.ERROR_PRODUCT, payload: error.message })
    }
}