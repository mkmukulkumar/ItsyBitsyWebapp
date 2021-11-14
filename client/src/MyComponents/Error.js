import React from 'react'
import { NavLink } from 'react-router-dom';
import './Login.css';

export default function Error() {
    return (
        <>
        <div className="outerborder">
            
            <div className="errorborder">
                <h1>Error 404</h1>  
                <h4>We are Sorry, Page Not Found!</h4>  
                <p>Look like this page is missing. Don't worry though. Our best man is on the case.
                </p>
                <NavLink className="btn btn-outline-primary btn-block" to="/">Go to Homepage</NavLink>         
        </div>
    </div>
    </>

    )
}
