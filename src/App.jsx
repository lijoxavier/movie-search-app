import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/globals.css'
import { ToggleContext } from './context/toggleContext'
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search'

function App() {
  const {mode}=useContext(ToggleContext)

  return (
    <>
      <div className="container-app" style={{ colorScheme: mode ? "light dark" : "light", background: mode ?"#d7dadc57":""}}>
    <Search/>
    


    </div>
    </>
  )
}

export default App
