import React from 'react'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-top"/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-right mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Holdings</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/news">News</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/notifications">Notifications</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/settings">Settings</NavLink>
                </li>  
                <li className="nav-item">
                <NavLink className="nav-link" to="/login">Logout</NavLink>
                </li>  
            </ul>
            </div>
        </div>
        </nav>   
      </>    
    )
}
