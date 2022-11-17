import React from 'react';
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {id} =  useParams ()
   

    useEffect(() => {
        customFetch(2000, products )
            .then(result => {
                setDato(result.find(item =>item.id===parseInt(id)))
                console.log(dato);
            })
            .catch(err => console.log(err))
    }, [id]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;