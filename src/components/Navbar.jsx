import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
    return (
        <nav className="navbar">
            <div>
                <h1>Shopping Site</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart {cart.length === 0 ? '' : <span>{cart.length}</span>}</Link>
            </div>
        </nav>
    )
}

export default Navbar;