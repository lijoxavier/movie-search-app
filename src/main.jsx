import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToggleProvider } from './context/ToggleContext.jsx'
import { MovieListProvider } from './context/MovieListContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>

  <MovieListProvider>
  <ToggleProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
  </ToggleProvider>
  </MovieListProvider>

  </AuthProvider>
)
