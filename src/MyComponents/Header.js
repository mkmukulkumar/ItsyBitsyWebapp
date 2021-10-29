import React from 'react'
import logo from '../logo.svg'
export default function Header() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="50" height="50" class="d-inline-block align-text-top"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-right mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Investment</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Notifications</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
                </li>  
                <li class="nav-item">
                <a class="nav-link" href="#">Logout</a>
                </li>  
            </ul>
            </div>
        </div>
        </nav>   
      </>    
    )
}
