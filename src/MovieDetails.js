import React,{useEffect, useState} from 'react'
import Axios from "axios"
import {useParams} from "react-router-dom"
import {StyledMoviDetailImg,StyledMoviDetailLink, StyledMoviDetailWrapper, StyledMoviDetailText, StyledMoviDetailTextWrapper, StyledMoviDetailHeader} from "./MovieDetail.style"



const movieDetailsBaseUrl="https://api.themoviedb.org/3/movie/"
const apiKey=""
const imgUrl=`https://image.tmdb.org/t/p/w500`
export default function MovieDetails() {
    const [movieDetails, setMovieDetails]=useState()
    const {id}=useParams();
    console.log(movieDetails)
    useEffect(() => {
        Axios.get(
            movieDetailsBaseUrl + id, {params:{
            api_key:apiKey,
            
        }})
        .then((res)=>{
            setMovieDetails(res?.data)
            // console.log(res?.data)
        })
        .catch((err)=>console.log(err))
    }, [id])
    return (
        <StyledMoviDetailWrapper>
            {
                movieDetails?.poster_path ? 
                 <StyledMoviDetailImg src={imgUrl + movieDetails?.poster_path } alt="film image"/>
                :<StyledMoviDetailImg src={"https://t1.pixers.pics/img-1fb6f67c/bilder-auf-acrylglas-filmkamera.jpg?H4sIAAAAAAAAA3VOW27DIBC8DpZc72LMGvsA-c0RLIMhpfEDAU2inr64VT-r1Wh3R5oHfO5pdhaM3bONsPllWS04v5YvjdEm_2UZ1pJENRZ2ZYhYjcfDRhOPwN4k1ieI_6Aan3MRbnO8s_ecQxoBkmiCfxW3skwCsyVokQ_AOchlkRJbbXRv9BRWe0--uL0kNmG_1XhO9VeiQ6y7MzxHv7HS5ig5mX2EWwX_ZP3eUFRwuYJQIDgQQY8nNV2uQglO1OPUtYocH4hQt4qrVvWOOhTkrOZCDEtTUr4BEyejrSoBAAA="} alt="anonim film image"/>
            }
            
            <StyledMoviDetailTextWrapper>
                <StyledMoviDetailHeader>{movieDetails?.original_title}</StyledMoviDetailHeader>
                <StyledMoviDetailText>{movieDetails?.overview} </StyledMoviDetailText>
                <StyledMoviDetailText>Release: {movieDetails?.release_date} </StyledMoviDetailText>
                <StyledMoviDetailText>Popularity: {movieDetails?.popularity} </StyledMoviDetailText>
                <StyledMoviDetailText>Vote: {movieDetails?.vote_average} </StyledMoviDetailText>
                <StyledMoviDetailLink href={movieDetails?.homepage}>Link: {movieDetails?.homepage} </StyledMoviDetailLink>
            </StyledMoviDetailTextWrapper>
        </StyledMoviDetailWrapper>
    )
}
