import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const ProtectedRouteLogin = () => {
 

    const {auth}=useAuth()
   
    if(!auth){
        return <Navigate to='/login'/>
    }
  return <Outlet/>
}

export default ProtectedRouteLogin