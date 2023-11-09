import { useOutletContext } from "react-router-dom";
import useFetch from "./useFetch";

const Cart = () => {
    const [contextProps] = useOutletContext();
    const cartItems = contextProps.cart;
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products");

    return (
        <div>
            <p>This is the cart page</p>
        </div>
    )
}

export default Cart;