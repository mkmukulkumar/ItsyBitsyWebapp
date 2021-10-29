import React from 'react'
import "./Holdings.css"
import { NotificationItem } from './Notification Item'
export default function Notifications() {
    let Notificationslist=[
        {
            notify:"Sell",
            stock:"IEX",
            price:102,
            qty:200,
        },
        {
            notify:"Buy",
            stock:"Reliance",
            price:2302,
            qty:9,
        },
        {
            notify:"Buy",
            stock:"HUL",
            price:2102,
            qty:22,
        },
        {
            notify:"Buy",
            stock:"TATA",
            price:202,
            qty:20,
        },
        {
            notify:"Buy",
            stock:"Reliance",
            price:2302,
            qty:9,
        },
        {
            notify:"Buy",
            stock:"HUL",
            price:2102,
            qty:22,
        },
        
    ]  
    return (
        <>
           
            <div className="holdingcontainer">
                <h3>Notifications for Today</h3> 
                <div className="Stocklist">
                    {Notificationslist.map((Notificationslist)=>{
                        return <NotificationItem Notificationslist={Notificationslist}/>
                    })}
                </div>
            </div>
        </>    
    )
}