import { useOutletContext } from "react-router-dom";

const CartList = ({ products }) => {
    const [contextProps] = useOutletContext();
    const selectedItems = contextProps.cart;
    const setCart = contextProps.setCart;
    const convertedCart = selectedItems.map(convertNumber)
    
    function convertNumber(value) {
        return +value;
    }

    const items = products.filter(product => convertedCart.includes(product.id))
    
    let total = 0;
    items.forEach((item) => total += item.price)

    const handleRemoveItem = (itemId) => {
        const updatedCart = selectedItems.filter((item) => item !== itemId.toString());
        setCart(updatedCart);
    };

    return (
        <>
            <h3>Total: ${total}</h3>
            {items.length === 0 ? <div><h3>There appears to be no items in your cart.</h3></div> : 
                <div className="grid-container">    
                {items.map((item) => {
                    return (
                        <div className="item-card" key={item.id} id={item.id}>
                            <h2>{item.title}</h2>
                            <img src={item.image} alt="#" />
                            <p>{item.price}</p>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove item</button>
                        </div>
                    )
                })}
            </div>}
        </>
    )
}

export default CartList;