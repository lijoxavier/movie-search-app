import React, { useContext, useState } from 'react'
import './header.css'
import { ToggleContext } from '../../context/toggleContext'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const {mode,setMode}=useContext(ToggleContext)
    const {logout}=useAuth()
    const navigate=useNavigate()
    const handleMode=()=>{
        setMode(prev=>!prev);
    }
    const handlelogout=()=>{
        logout()
        navigate('/login',{replace:true})
    }
    return (
        <header>
            <h3>Debug Media</h3>
            <div className="group">
            <button onClick={handleMode}>
                    <span className="material-symbols-outlined">
                        {mode?"dark_mode":"light_mode"}
                    </span>
            </button>
            <button className={mode?"logout dark":"logout light"} onClick={handlelogout}>
                    <span className="material-symbols-outlined">
                        logout
                    </span>
                    
            </button>
            </div>
        </header>
    )
}

export default Header