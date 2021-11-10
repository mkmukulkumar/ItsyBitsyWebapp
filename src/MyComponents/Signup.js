import React from 'react'
import './Signup.css';
import logo from '../logo.svg'
export default function Signup() {
    return (
        <div className="outerborder">
            <div className="border">
                <div className="img">
                <img src={logo} alt="" class="d-inline-block align-text-top"/> 
                </div>
                   

                <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" />
                </div>


                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
    </div>

    )
}
