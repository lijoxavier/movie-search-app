import React, { createContext, useState } from 'react'

export const ToggleContext=createContext('')
export const ToggleProvider = ({children}) => {
    const [mode, setMode] = useState(false);
  return (
    <ToggleContext.Provider value={{mode,setMode}}>
        {children}
    </ToggleContext.Provider>
  )
}

