import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import ThorMovie from '../../assets/Images/thormovie.png'
import { ToggleContext } from '../../context/ToggleContext'
import axios from 'axios'
import { MovieListContext } from '../../context/MovieListContext'
import { img_url, urls } from '../constants'
import { useDebounce } from '../../hooks/useDebounce'
const API_KEY = import.meta.env.VITE_API_KEY
const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN
const Home = () => {
    const { mode } = useContext(ToggleContext)
    const { movieList, setMovieList } = useContext(MovieListContext)
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const fetchMovies = async (query) => {
        // setIsLoading(true)
        try {
            // const config = {
            //     headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2I5ZGI0Mzc5ZDIxMjQzMDE3NWNmYmY2N2EyOGNhOCIsInN1YiI6IjY0NGZhODFmYmRkNTY4MTJkZWNiZWFmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lE-S40fWkO2SwEqHcKkqaVOXcsCE-sVG4JmoLmFDj1Q" },
            //     params: {
            //         query: "thor"
            //     }
            // }
            // const config={
            //     // headers: { Authorization:`Bearer ${API_ACCESS_TOKEN} `}
            // }

            const options = {
                headers: { Authorization: `Bearer ${API_ACCESS_TOKEN}` },
                params: { query }
            }

            let response = await axios(urls.movie_api2, options)
            // console.log(response?.data);
            await setMovieList(response?.data?.results)



        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }
    console.log(movieList);


    const handleChange = (event) => {
        const { value } = event.target
        setInputValue(value)

    }
    console.log(inputValue);

    useEffect(() => {
        const timeout = useDebounce(inputValue,fetchMovies)

        return () => {
            clearTimeout(timeout)
        }

    }, [inputValue])

    // if (isLoading) {

    //     return <div style={{ color: "white" }}>
    //         <h3>Loading..</h3>
    //     </div>

    // }
    return (

        <div className='home-container'>
            <div className="search">
                <span className={mode ? "material-symbols-outlined dark" : "material-symbols-outlined"}>
                    search
                </span>
                <input type="text" name="" id="" placeholder='Search Movies' onChange={handleChange} />
            </div>
            {isLoading && <div style={{ marginBottom: "20px" }}><h3 style={{ textAlign: "center" }}>Loading..</h3></div>}
            {movieList.length === 0 && <div><h3 style={{ textAlign: "center" }}>No Data</h3></div>}
            <div className="movies">

                {
                    movieList?.map((movie) => (
                        <img src={`${img_url}${movie?.poster_path}`} alt="" key={movie.id} />
                    ))
                }

            </div>
        </div>
    )
}

export default Home