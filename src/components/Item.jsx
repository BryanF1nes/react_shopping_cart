import { useOutletContext } from "react-router-dom";

const Item = ({ title, id, image, price }) => {

    const [contextProps] = useOutletContext();
    const handleAddToCart = contextProps.handleAddToCart;

    return (
        <div className="item-card" id={id}>
            <img src={image} alt="blank" />
            <h2>{title}</h2>
            <p>${price}</p>
            <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
    )
}

export default Item;