import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Oops.. It appears you've strayed too far!</h1>
            <p>Click <Link to="/">HERE</Link> to be redirected to the homepage!</p>
        </div>
    )
}

export default ErrorPage;