import Item from "./Item";

const ItemList = ({ products }) => {

    console.log(products);

    return (
        <>
            <div className="grid-container">
                {products.map((product) => {
                    return (
                        <Item key={product.id} title={product.title}/>
                    )
                })}
            </div>
        </>
    )
}

export default ItemList;