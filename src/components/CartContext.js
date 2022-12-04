import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);
    
    const addToCart = (item, qty) => {
        //preguntar si item existe en el array
        let found = cartList.find(product => product.idItem === item.id);
            if ( found === undefined) {
            setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.image[0],
                nameItem: item.name,
                costItem: item.cost,
                qtyItem: qty
            }
           ]);
        } else {
        //al encontrarlo, entonces aumentamos el qty de ese producto
        found.qtyItem += qty;
        }
    }
    
    const clear = () => {
    setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    return( 
        <CartContext.Provider value={{cartList, addToCart, clear, deleteItem}}>
         {children}
        </CartContext.Provider>
    )
}

export default  CartContextProvider;