import React from 'react'
import './Buysellform.css';
export default function Buysellform() {
    return (
        <>
                <form className="buysellcontainer">
                    <h3>Buy/Sell</h3>

                    <div className="form-group">
                        <label>Stock Name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="buysellbuttons">
                        <button type="submit" className="btn btn-primary">Buy New Investment</button>
                        <button type="submit" className="btn btn-secondary">Sell New Investment</button>
                    </div>
                </form>
            
        </>  

    )
}
