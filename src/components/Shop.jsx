import useFetch from "./useFetch";
import ItemList from "./ItemList";

const Shop = () => {

    const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products")

    
    return (
        <div>
            <p>This is the shop page</p>
            {loading && <h3>Loading...</h3>}
            {products && <ItemList products={products} />}
        </div>
    )
}

export default Shop;