import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { CartContext } from './CartContext';
import { useState } from 'react';



const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState (0);
    const {addToCart} = useContext (CartContext)

        const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        addToCart(item)
    }

    return (
        <>
        {   item && item.image
            ? 
            <div>         
              <img className="img" src={item.image}/>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className='costo'>$ {item.cost}</p>
              <p>{item.stock} unidades en stock</p>
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
               {
                 ItemCount === 0
                 ? <ItemCount stock={item.stock} initial={ItemCount} onAdd={onAdd} />
                 : <Link to='/cart'><button className='verCarrito'>Ver Carrito</button></Link>
                       
                } 
          </div>
          : <p>Cargando...</p>   
        }
        </>
    );
}

export default ItemDetail;