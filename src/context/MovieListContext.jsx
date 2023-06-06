import React, { createContext, useState } from 'react'


export const movieData=[]
export const MovieListContext=createContext('')

export const MovieListProvider = ({children}) => {
    const [movieList,setMovieList]=useState([])

  return (
    <MovieListContext.Provider value={{movieList,setMovieList}}>
        {children}
    </MovieListContext.Provider>
  )
}

