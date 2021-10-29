import React from "react"
import "./HoldingsItem.css"
export const NewsItem=({Newsheadlines})=>{
    return(
        <div className="stockholdinglist">
            <div className="listsingleentry">
                <text className="entryheading">{Newsheadlines.Headline}</text>
            </div>
        </div>
    )
}