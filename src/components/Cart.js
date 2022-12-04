import { useCartContext } from "./CartContext";

const Cart = () => {
    const {cartList} = useCartContext ()
    console.log(cartList);

    return (
        <>
            <h1 className="cart">Carrito 🎯</h1>
            <hr/>
            <ul>
            {
                cartList.length === 0
                ?<li>No hay productos en el carrito</li>
                :cartList.map(item => <li key={item.idItem}>{item.nameItem}</li>)
            }
            </ul>
        </>
    );
}

export default Cart;