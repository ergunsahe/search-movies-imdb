import React from "react"
import {useHistory} from "react-router-dom"

import {StyledCardWrapper, StyledCardText, StyledCardImg} from "./Card.style"

export const Card=({movie})=>{
    const imgUrl=`https://image.tmdb.org/t/p/w500`
    const history = useHistory()
    return(
        <StyledCardWrapper onClick={() =>history.push(`/detail/${movie.id}`)}>
            {movie.poster_path ?
                <StyledCardImg src={imgUrl + movie.poster_path} alt="film image"/>
            :<StyledCardImg src={"https://t1.pixers.pics/img-1fb6f67c/bilder-auf-acrylglas-filmkamera.jpg?H4sIAAAAAAAAA3VOW27DIBC8DpZc72LMGvsA-c0RLIMhpfEDAU2inr64VT-r1Wh3R5oHfO5pdhaM3bONsPllWS04v5YvjdEm_2UZ1pJENRZ2ZYhYjcfDRhOPwN4k1ieI_6Aan3MRbnO8s_ecQxoBkmiCfxW3skwCsyVokQ_AOchlkRJbbXRv9BRWe0--uL0kNmG_1XhO9VeiQ6y7MzxHv7HS5ig5mX2EWwX_ZP3eUFRwuYJQIDgQQY8nNV2uQglO1OPUtYocH4hQt4qrVvWOOhTkrOZCDEtTUr4BEyejrSoBAAA="} alt="anonim film image"/>
            }
            <StyledCardText>{movie.title}</StyledCardText>

        </StyledCardWrapper>
    )
}