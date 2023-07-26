import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const CartItems = () => {
    
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
           <h1 className="font-bold">Cart</h1>
           <button className="p-2 m-2 bg-orange-400 text-black rounded" onClick={handleClearCart}>Clear Cart</button>
           {cartItems.length === 0 && <h1>Cart is empty. Add Items to the cart!</h1>}
           <div className="w-6/12 m-auto flex flex-wrap">
            
                <ItemList items={cartItems} />
           </div>
        </div>
    );
};

export default CartItems;