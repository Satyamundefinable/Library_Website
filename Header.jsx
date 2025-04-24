import { useState } from 'react'
import './header.css'
import { NavLink } from "react-router-dom"

export const Headers = () => {
    return <header>
        <div className="container">
            <div className="navbar">
                <div className="Logo"><NavLink to="/">
                <img src="/photo.webp" alt="" style={{height:"100px", width: "100px", borderRadius: "50%"}} />
                </NavLink></div>
                <nav>
                    <ul>
                        <li> <NavLink to="/" >Home</NavLink></li>
                        <li> <NavLink to="events" >Events</NavLink></li>
                        <li> <NavLink to="Catalog" >Catalog</NavLink></li>
                        <li> <NavLink to="services" >Services</NavLink></li>
                        <li> <NavLink to="about" >About</NavLink></li>
                        <li> <NavLink to="contact" >Contact</NavLink></li>
                        <li> <NavLink to="login" > Login </NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
}