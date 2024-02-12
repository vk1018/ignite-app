import { Link } from "react-router-dom/dist";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{
    const[btnName,setBtnName]=useState("Login");
    
    return(
    <div className="flex justify-between">
        <div className="logo-container">
            <img src={LOGO_URL} className="w-56" alt="logo"/>
        </div>
        <div className="nav-items">
            <ul className="flex">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <li><Link to="/grocery">Grocery</Link></li>
                <button className="btn" onClick={()=>{
                   btnName==="Login" ?setBtnName("Logout"):setBtnName("Login")
                }}>{btnName}</button>
                
                
            </ul>

        </div>
    </div>
    );
};

export default Header;