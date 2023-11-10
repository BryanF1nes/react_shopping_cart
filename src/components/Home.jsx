import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p>This is the home page</p>
            <p>Click <Link to="shop">Here</Link> to shop around!</p>
        </div>
    )
}

export default Home;