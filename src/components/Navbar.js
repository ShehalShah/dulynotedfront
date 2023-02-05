import React from 'react'
import {Link, Navigate,useNavigate, useLocation } from "react-router-dom";
import Dropdownuser from './Dropdownuser';

const Navbar = (props) => {
    let location = useLocation();
    let navigate=useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem("token");
        navigate("/login");
        props.showAlert("Logged Out successfully","success")
    }

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Duly Noted.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    {/* check if logged in or not */}
                        {!localStorage.getItem('token')?
                        <form className="d-flex">
                        <Link className="btn btn-primary mx-3" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-3" to="/signup" role="button">Signup</Link> </form> : 
                        <form className="d-flex">
                        <Dropdownuser className="mx-5"/>
                        <button className="btn btn-primary mx-5" onClick={handleLogout}>Logout</button>
                        </form>
                        }
                </div>
            </div>
        </nav>
    )
}

export default Navbar