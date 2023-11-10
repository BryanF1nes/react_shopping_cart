import { useOutletContext } from "react-router-dom";
import useFetch from "./useFetch";
import CartList from "./CartList";

const Cart = () => {
    const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");

    return (
        <div>
            <p>This is the cart page</p>
            {error && <div>Error Could not Fetch Data</div>}
            {loading && <h3>Loading...</h3>}
            {products && <CartList products={products}/>}
        </div>
    )
}

export default Cart;