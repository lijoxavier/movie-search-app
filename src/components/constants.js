
const API_KEY=import.meta.env.VITE_API_KEY
// const AJITH_API_KEY=import.meta.env.VITE_AJITH_API_KEY
export const urls={
   // movie_api: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
    movie_api1:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&query='hitman'`,
    movie_api2:`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
}
export const img_url = "https://image.tmdb.org/t/p/w500/"