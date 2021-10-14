import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"

export default function TopBar() {
    const user = false;
    return (
        <div className= "top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className = "topList">
                    <li className="topListItem">
                        <Link to= "/" style= {{textDecoration:'none', color:"inherit"}} >Home</Link>
                    </li>
                    <li className="topListItem">
                    <Link to= "/" style= {{textDecoration:'none', color:"inherit"}}   >About</Link>
                    </li>
                    <li className="topListItem">
                        <Link to= "/" style= {{textDecoration:'none', color:"inherit"}} >Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="write" style= {{textDecoration:'none', color:"inherit"}} >Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
            {user ? (
                <img  className =" topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" />
            ):(
                <ul className = "topList">
                    <li className = "topListItem">
                        <Link style= {{textDecoration:'none', color:"inherit"}} to ="/login">Login</Link>
                    </li>
                    <li className = "topListItem">
                        <Link style= {{textDecoration:'none', color:"inherit"}} to ="/register">Register</Link>
                    </li>
                </ul>
            )}
            
            
            <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
