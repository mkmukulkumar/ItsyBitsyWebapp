import React from 'react'
import { HoldingsItem } from './Holdingsitem'
import "./Holdings.css"

export default function Holdings() {
    let stockholdings=[
        // {
        //     sno:1,
        //     stock:"TATA",
        //     cmp:231,
        //     avgprice:202,
        //     qty:20,
        // },
        // {
        //     sno:2,
        //     stock:"Reliance",
        //     cmp:2102,
        //     avgprice:2302,
        //     qty:9,
        // },
        // {
        //     sno:3,
        //     stock:"HUL",
        //     cmp:2231,
        //     avgprice:2102,
        //     qty:22,
        // },
        // {
        //     sno:1,
        //     stock:"TATA",
        //     cmp:231,
        //     avgprice:202,
        //     qty:20,
        // },
        // {
        //     sno:2,
        //     stock:"Reliance",
        //     cmp:2102,
        //     avgprice:2302,
        //     qty:9,
        // },
        // {
        //     sno:3,
        //     stock:"HUL",
        //     cmp:2231,
        //     avgprice:2102,
        //     qty:22,
        // },
        
    ]  
    return (
        <>
           
            <div className="holdingcontainer">
                <h3>Holdings</h3> 
                <div className="Stocklist">
                    {stockholdings.map((stockholdings)=>{
                        return <HoldingsItem stockholdings={stockholdings}/>
                    })}
                </div>
            </div>
        </>    
    )
}
