//import { Transaction } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { useReducer } from "react"
import { appFireStore } from "../firebase/config"


const initState = {
    document : null,
    isPending : false,
    error : null,
    success: false
}

const storeReducer = (state, action) => {
    switch (action.type){
        default:
            return state
    }
}

export const useFireStroe = (transaction) => {
    const [reponse, dispatch] = useReducer(storeReducer, initState)
    
    // colRef : 컬렉션의 참조를 요구한다.
    const colRef = collection(appFireStore, transaction);

    //컬렉션에 문서를 추가한다.
    const addDocument = () => {

    }

    //컬렉션에 문서를 제거한다.
    const deleteDocument = (id) => {

    }

    return { addDocument, deleteDocument, reponse }
}