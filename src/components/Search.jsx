import React from 'react'
import Header from './header/Header'
import './search.css'
import Login from './Login/Login'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import ProtectedRouteLogin from './ProtectedRouteLogin/ProtectedRouteLogin'
import ProtectedRouteAfterLogin from './ProtectedRouteLogin/ProtectedRouteAfterLogin'
import ProtectedRouterWrapper from './ProtectedRouteLogin/ProtectedRouteAfterLogin'
import Signin from './Signin/Signin'


const Search = () => {
  return (
   <div className="container-search">
   
    <Header></Header>
    {/* <Login></Login> */}
    {/* <Routes>
    </Routes> */}
  
      <Routes>
      
       <Route element={<ProtectedRouteLogin/>}>
        <Route path='/' element={<Home/>}/>
       </Route>

        <Route element={<ProtectedRouteAfterLogin />}>
          <Route path='/login' element={<Login />} />
        </Route>
       {/* <Route path='/login' element={<Login/>}/> */}
    <Route path='/signin' element={<Signin/>}/>
      </Routes>

  {/* <Home/> */}
    <Footer></Footer>
   </div>
  )
}

export default Search