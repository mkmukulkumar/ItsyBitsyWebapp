import React, {useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import Header from './Header'
import './Dashboard.css'
import Buysellform from './Buysellform'
import Holdings from './Holdings'
import axios from 'axios'

export default function DashboardHoldings() {

    const navigate=useNavigate()

    const callHomePage=async()=>{

        try{
            
            const res=await fetch('http://localhost:5000',{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },          
            });
            const UserData = await res.json()
            console.log(UserData)
            

            if(res.status!==200){
                const error = new Error(res.error)
                throw error
            }
        }
        catch(err){
            window.alert(err)
            console.log(err)
            navigate('/login')
        }

    }


    // const callHomePage = async () => {
    //     try {
    //         const res = await fetch("http://localhost:5000/");

    //         const user = await res.json();
    //         // setUserData({ ...userData, name: user.name, email: user.email, phone: user.phone });

    //         if (!res.status === 200) {
    //             const error = new Error(res.error);
    //             throw error;
    //         }

    //     } catch (err) {
    //         window.alert(err)
    //     }
    // }


    useEffect(()=>{
        callHomePage()
    },[])
 
    return (
        <>
            <Header/>
            <div className="mastercontainer">
                <div className="semimaincontainerI">
                    <div className="hellocontainer">
                        <h2>Hello!!</h2>
                        <h5>Shenuket Das</h5>
                    </div>
                    <Buysellform/>
                </div>
                <div className="semimaincontainerII">
                    <div className="masterportfolio" >
                        <div className="portfoliocontainer">
                            <div>
                                <h4>35000</h4>
                                <h6>Invested Value</h6>
                            </div>
                            <div>
                                <h4>35000</h4>
                                <h6>Current Value</h6>
                            </div>
                            <div>
                                <h4>3500</h4>
                                <h6>Profit</h6>
                            </div>
                        </div>
                        <div className="percentcontainer">
                                <h4>+21%</h4>
                                <h6>Portfolio</h6>
                        </div>
                    </div>
                    <Holdings/>                   
                </div>
            </div>
            
        </>    
    )
}
