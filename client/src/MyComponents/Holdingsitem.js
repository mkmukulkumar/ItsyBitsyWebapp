import React from "react"
import "./HoldingsItem.css"
export const HoldingsItem=({stockholdings})=>{
    return(
        <div className="stockholdinglist">
            <div className="listsingleentry">
                <text>{stockholdings.stock}</text>
                <text className="entryheading">Stock Name</text>
            </div>
            <div className="listsingleentry">
            <text>{stockholdings.cmp}</text>
            <text className="entryheading">Current Price</text>
            </div>
            <div className="listsingleentry">
            <text>{stockholdings.qty}</text>
            <text className="entryheading">Avg Price</text>
            </div>
            <div className="listsingleentry">
            <text>{stockholdings.avgprice}</text>
            <text className="entryheading">Return</text>
            </div>
        </div>
    )
}