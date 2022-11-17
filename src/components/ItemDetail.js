import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item && item.image
            ? 
    <div>         
                        <img src={item.image[0]}/>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>$ {item.cost}</p>
                        <p>{item.stock} unidades en stock</p>
            
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        
                    </div>
            : <p>Cargando...</p>
           
        }
        </>
    );
}

export default ItemDetail;