import './ErrorPage.css'
import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();

    return  (
        <div className="error-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        The page you're looking for doesn't exist or might have been moved.
      </p>
      <NavLink to="/" className="home-link">Go Back Home</NavLink>
    </div>
    )
}