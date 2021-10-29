import React from 'react'
import "./Holdings.css"
import { NewsItem } from './NewsItem'

export default function News() {
    let Newheadlines=[
        {
            Headline:"Aryan Khan got bails",
           
        },
        {
            Headline:"TCS launches ",
           
        },  {
            Headline:"TATA motor burst",
           
        },  {
            Headline:"IRCTC got split",
        },       
        {
            Headline:"Aryan Khan got bails",
           
        },
        {
            Headline:"TCS launches ",
           
        },  {
            Headline:"TATA motor burst",
           
        },  {
            Headline:"IRCTC got split",
        },       
        {
            Headline:"Aryan Khan got bails",
           
        },
        {
            Headline:"TCS launches ",
           
        },  {
            Headline:"TATA motor burst",
           
        },  {
            Headline:"IRCTC got split",
        },         
        
    ]  
    return (
        <>
             <div className="holdingcontainer">
                <h3>News</h3> 
                <div className="Stocklist">
                    {Newheadlines.map((Newheadlines)=>{
                        return <NewsItem Newsheadlines={Newheadlines}/>
                    })}
                </div>
            </div>
        </>    
    )
}
