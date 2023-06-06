import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const ProtectedRouteAfterLogin = () => {
    //     // const navigate = useNavigate();
    // const auth_token =  localStorage.getItem("auth_token")

    const { auth,setAuth} = useAuth()
    
    const token = localStorage.getItem("auth_token");
    useEffect(() => {
        setAuth(token);
    }, []);
    // setAuth(auth_token)
    //     // return auth_token ? <Navigate to='/' /> : <Outlet />
    console.log(auth, "==auth in protectedrouteafter");
    if (auth) {
        return <Navigate to='/' />
        //         // return <h3>fdfd</h3>

    }
    return <Outlet />

}

// const ProtectedRouterWrapper=()=>{
//     const auth_token = JSON.parse(localStorage.getItem("auth_token"))
//     return <ProtectedRouteAfterLogin auth_token={auth_token}/>

// }
// 


// const ProtectedRouteAfterLogin = () => {
//     const [authToken, setAuthToken] = useState(null);

//     useEffect(() => {
//         const token = JSON.parse(localStorage.getItem("auth_token"));
//         setAuthToken(token);
//     }, []); // Add an empty dependency array here

//     if (authToken) {
//         return <Navigate to='/' />;
//     }
//     return <Outlet />;
// };
export default ProtectedRouteAfterLogin