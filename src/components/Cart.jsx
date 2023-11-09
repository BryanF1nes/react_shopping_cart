import { useOutletContext } from "react-router-dom";
import useFetch from "./useFetch";
import CartList from "./CartList";

const Cart = () => {
    const [contextProps] = useOutletContext();
    const seletectedItems = contextProps.cart;
    const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");

    // fetch the data -> display only items that include id values of the cart array

    return (
        <div>
            <p>This is the cart page</p>
            {products && <CartList products={products} seletectedItems={seletectedItems}/>}
        </div>
    )
}

export default Cart;