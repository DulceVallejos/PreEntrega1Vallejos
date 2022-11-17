import React from 'react';
import { Link } from 'react-router-dom';

/* import { Link } from 'react-router-dom'; */


const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
    <div>
          
            <img className="imagen" src={pictureUrl} />
            <div>
                <div>
                   <strong>$ {price}</strong>
                </div>
                <div>
                   {stock} unid.
                </div>
                <div style={{cursor: "pointer"}}>
                     <Link to={`/item/${id}`}>Details</Link> 
                </div>
            </div>
        </div>
    );
}

export default Item