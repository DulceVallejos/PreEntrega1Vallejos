import React from 'react';
import { Link } from 'react-router-dom';



const Item = ({ id, stock, price, pictureUrl }) => {
    return (
     <div>
            <img className="imagen" src={pictureUrl} />
            <div>
                <div>
                   <strong>$ {price}</strong>
                </div>
                <div>
                   {stock} unidades
                </div>
                <div style={{cursor: "pointer"}}>
                     <Link to={`/item/${id}`}>Detalle</Link> 
                </div>
            </div>
      </div>
    );
}

export default Item;