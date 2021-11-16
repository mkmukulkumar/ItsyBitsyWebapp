import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../logo.svg'
export default function Login() {

const navigate=useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const loginUser=async(e)=>{
    e.preventDefault()
    const res = await fetch('http://localhost:5000/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email, password
        })
    })
    const data=res.json()
    console.log(data)

    if(res.status===400||!data){
        window.alert("Invalid Credentials")
    } else{
        window.alert("Login Successfully")
        navigate("/")
    }

}



    return (
        <div className="outerborder">
            <div className="border">
                <div className="img">
                <img src={logo} alt="" className="d-inline-block align-text-top"/> 
                </div>
                   

            <form method="POST">
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" autoComplete= "off" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" autoComplete= "off" 
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block" value="Log In" onClick={loginUser}>Sign In</button>
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
