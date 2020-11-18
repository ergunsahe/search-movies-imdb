import React,{useEffect, useState, createContext} from "react"
import {StyledAppWrapper} from "./App.style"
import {CardList} from "./components/CardList/index" ;
import {SearchBox} from "./components/SeacrhBox/index"
import Axios from "axios"


const apiKey=""
const baseUrl="https://api.themoviedb.org/3/search/movie?" 

export const MovieContext=createContext()
function Movie() {
  const [movieList, setMovieList]=useState([])
  const [searchedMovie, setSearchedMovie]=useState("Star Wars")
  
  useEffect(() => {
      Axios.get(baseUrl, {params:{
          api_key:apiKey,
          page:1,
          query:searchedMovie
      }})
      .then((res)=>{
          setMovieList(res.data.results)
          // console.log(res.data.results)
      })
      .catch((err)=>console.log(err))
  }, [searchedMovie])
  return (
    <>
      <StyledAppWrapper>
        <MovieContext.Provider value={{movieList, setSearchedMovie}}>
          <SearchBox   />
          <CardList />
        </MovieContext.Provider>
      </StyledAppWrapper>
    </>
  );
}

export default Movie;
