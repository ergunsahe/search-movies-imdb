import React,{useState, useEffect} from "react";
import axios from "axios";


const popularBaseUrl="https://api.themoviedb.org/3/movie/popular?"
const apiKey=""
export const Popular=() =>{
    const [popularMovies, setPopularMovies]=useState([])
    useEffect(() =>{
        axios.get(popularBaseUrl, {params:{api_key:apiKey, page:1}})
        .then((res) => {setPopularMovies(res.data.results)})
        .catch((err) => console.log(err))
    }, [popularMovies])
    return(
        <div>
            <p>{popularMovies.title}</p>
        </div>
    )
}