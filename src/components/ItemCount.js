import React from 'react';
import { useEffect, useState } from 'react';


const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <div className='carro'>
            <button  onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            {
                stock
                ? <button className='boton' onClick={() => onAdd(count)}>Agregar al carrito</button>
                : <button>Agregar al carrito</button>
            }
            
        </div>
    );
}

export default ItemCount;