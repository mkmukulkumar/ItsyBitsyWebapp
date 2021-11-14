import React from 'react';
import {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './MyComponents/Login';
import Signup from './MyComponents/Signup';
import DashboardNews from './MyComponents/DashboardNews';
import DashboardHoldings from './MyComponents/DashboardHoldings';
import DashboardNotifications from './MyComponents/DashboardNotifications';
import Error from './MyComponents/Error';

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/" element={<DashboardHoldings/>} />
            <Route path="/notifications" element={<DashboardNotifications/>} />
            <Route path="/news" element={<DashboardNews/>} />
            <Route path="*" element={<Error/>} />   
      </Routes>
    </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
