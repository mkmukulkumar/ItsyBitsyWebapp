import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Signup.css';
import logo from '../logo.svg'
export default function Signup() {

    const navigate=useNavigate()
    const[user,setUser]=useState({
        name:"", email:"", password:"", cpassword:''
    })

    let name, value
    const handleInputs=(e)=>{
        name=e.target.name
        value=e.target.value
        setUser({...user,[name]:value})
    }

    const PostData = async(e)=>{
        e.preventDefault()
        const {  name, email, password, cpassword }=user
        const res= await fetch("http://localhost:5000/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, password, cpassword
            })
        })

        const data = await res.json()
        
        console.log(data)
        if(res.status===422||!data){
            window.alert("Invalid Registration")
            
        }
        else{
            window.alert("Registration Successful")
            navigate("/login")
        }
    }


    return (
        <div className="outerborder">
            <div className="border">
                <div className="img">
                <img src={logo} alt="" className="d-inline-block align-text-top"/> 
                </div>
                   

                <form method="POST">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" name="name" className="form-control" autoComplete= "off" placeholder="Full name" value={user.name} onChange={handleInputs}/>
                </div>


                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" autoComplete= "off" placeholder="Enter email"value={user.email} onChange={handleInputs}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" autoComplete= "off" placeholder="Enter password" value={user.password} onChange={handleInputs}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="cpassword" className="form-control" autoComplete= "off" placeholder="Enter password" value={user.cpassword} onChange={handleInputs}/>
                </div>
                
                <button type="submit" name="signup" className="btn btn-primary btn-block" value="register" onClick={PostData}>Sign Up</button>
                <p className="forgot-password">
                    Already registered <NavLink to="/login">sign in?</NavLink>
                </p>
            </form>
        </div>
    </div>

    )
}
