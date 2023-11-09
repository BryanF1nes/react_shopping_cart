import Item from "./Item";

const ItemList = ({ products}) => {
    return (
        <>
            <div className="grid-container">
                {products.map((product) => {
                    return (
                        <Item 
                            key={product.id} 
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ItemList;