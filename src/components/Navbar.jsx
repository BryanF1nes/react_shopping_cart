import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <h1>Shopping Site</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar;