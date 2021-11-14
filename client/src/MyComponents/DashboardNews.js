import React from 'react'
import Header from './Header'
import './Dashboard.css'
import Buysellform from './Buysellform'
import News from './News'
export default function DashboardNews() {
 
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
                    <News/>                   
                </div>
            </div>
            
        </>    
    )
}
