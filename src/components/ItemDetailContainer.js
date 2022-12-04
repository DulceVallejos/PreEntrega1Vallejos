import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../services/firebaseConfig';

initializeApp(firebaseConfig)

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {id} = useParams()

const getItem = (id) => {
const db = getFirestore ()
const itemRef = doc(db,"Productos", id)
return getDoc (itemRef)
}

useEffect(() => { getItem(id).then((snapshot) => {  
       setDato ({...snapshot.data(), id:snapshot.id})
    })
},[id])


    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;