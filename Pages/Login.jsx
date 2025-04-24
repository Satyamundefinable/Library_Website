import { NavLink, Outlet  } from "react-router-dom"
import './Login.css';


export const Login = () => {
    return (
        <>
            <h1 className="Heading"> Choose User</h1>
            <div className="logincContainer">
                <div className="adminLogin">
                    <NavLink to="adminlogin" > Admin </NavLink>
                    </div>

                <div className="studentLogin">
                    <NavLink to="studentlogin" > Student  </NavLink>
                    </div>
            </div>
            <Outlet/>
        </>

    )
}