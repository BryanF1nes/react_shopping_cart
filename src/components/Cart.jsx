import { useOutletContext } from "react-router-dom";
import useFetch from "./useFetch";
import CartList from "./CartList";

const Cart = () => {
    const [contextProps] = useOutletContext();
    const seletectedItems = contextProps.cart;
    const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");

    // fetch the data -> display only items that include id values of the cart array
    const items = products.filter(product => seletectedItems.includes(product.id))

    return (
        <div>
            <p>This is the cart page</p>
            {error && <div>Error Could not Fetch Data</div>}
            {items.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;