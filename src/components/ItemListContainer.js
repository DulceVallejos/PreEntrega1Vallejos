import React from 'react';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import firebaseConfig from "../services/firebaseConfig";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    initializeApp (firebaseConfig)

const [load, setLoad] = useState (false) 

const {categorySelect} = useParams()


const getProducts = (category) => {
    const db = getFirestore()
    const itemCollection = collection(db, "Productos")
    const q = category && query (itemCollection, where("category", "==", category))
    return getDocs(q||itemCollection)
    
}

useEffect(()=>{
    getProducts (categorySelect).then((snapshot)=>{
        setLoad (true)
        setDatos(snapshot.docs.map((doc)=>{return{...doc.data(), id:doc.id}}))
        console.log(datos);
    })
}, [categorySelect])


    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <> { load  ? <ItemList  items={datos} /> : <div>Cargando...</div> }
        </>
    );
}

export default ItemListContainer;

