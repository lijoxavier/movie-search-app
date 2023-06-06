import React from 'react'

export const useDebounce = (inputValue,fetchMovies) => {
  return setTimeout(()=>{
    if(inputValue.trim()){
        fetchMovies(inputValue)
    }else{
        fetchMovies("movie")
    }

  },300)
}

