import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setcat] = useState([]);

    useEffect(() => {
        const getCats = async ()=>{
            const res = await axios.get("/categories")
            setcat(res.data);
        }
       getCats();
    }, [])
    return (
        <div className = "sidebar">
           <div className="sidebarItem">
               <span className= 'sidebarTitle'>About Me</span>
               <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione 
                impedit perspiciatis laudantium quasi odio nostrum corrupti, aliquid?</p>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle">Categories</span>
               <ul className="sidebarList">
                   {cats.map((c)=> (
                       <Link className= "link" to = {`/?cat = ${c.name}`}>  
                       <li className="sidebarListItem">{c.name}</li>
                       </Link> 
                   ))}
               </ul>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle">Follow Us</span>
               <div className="sidebarSocial">
               <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
               </div>
           </div>
        </div>
    )
}
