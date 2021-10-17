import React, { useState } from 'react'
import "./register.css"
import { Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className = "register">
        <span className="registerTitle">Register</span>
        <form className ="registerForm">
        <label>Username</label>
        <input type="text" 
        className="registerInput" 
        placeholder= "Enter your username..  " 
        onChange= {e=> setUsername(e.target.value)}
        />

        <label>Email</label>
        <input type="text" 
        className="registerInput" 
        placeholder= "Enter your email..  " />
        
        <label>Password</label>
        <input type="password" 
        className="registerInput" 
        placeholder= "Enter your password..  " />

        <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
        <Link to = "/login" className="link"> Login </Link>
        </button>
    </div>
    )
}
