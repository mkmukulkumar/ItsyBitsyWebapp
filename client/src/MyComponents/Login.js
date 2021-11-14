import React from 'react'
import { NavLink } from 'react-router-dom';
import './Login.css';
import logo from '../logo.svg'
export default function Login() {
    return (
        <div className="outerborder">
            <div className="border">
                <div className="img">
                <img src={logo} alt="" class="d-inline-block align-text-top"/> 
                </div>
                   

            <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            <NavLink className="forgot-password" to="/signup"> 
                    Create New Account
            </NavLink>
            <NavLink className="forgot-password" to="#"> 
                    Forgot password?
            </NavLink>
        </form>
        </div>
    </div>

    )
}
