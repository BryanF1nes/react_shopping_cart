import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const [contextProps] = useOutletContext();
    
    return (
        <div>
            <p>This is the cart page</p>
        </div>
    )
}

export default Cart;