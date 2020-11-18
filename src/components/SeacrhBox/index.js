import React, {useContext, useRef} from "react"
import {StyledBoxWrapper, StyledBoxInput, StyledBoxButton} from "./SearchBox.style"
import {MovieContext} from "../../Movie"



export const SearchBox=(props)=>{
    
    const inputRef=useRef()
    const {setSearchedMovie} =useContext(MovieContext)

    return(
        <StyledBoxWrapper>
            <StyledBoxInput 
                ref={inputRef}
                placeholder="Search films.." 
                
            />
            <StyledBoxButton 
                onClick={() => {
                    setSearchedMovie(inputRef.current.value)
                    
                }} 
            >Search</StyledBoxButton>
        </StyledBoxWrapper>
    )
}