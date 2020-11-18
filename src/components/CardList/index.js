
import {useContext} from "react"
import {StyledCardListWrapper} from "./CardList.style"
import {Card} from "../Card/index"
import {MovieContext} from "../../Movie"





export const CardList=()=>{
    const {movieList} =useContext(MovieContext)
   
    return(
        <StyledCardListWrapper>
            {movieList.map((movie, i)=>{
                return <Card key={i} movie={movie}/>
            })
            
            
            }
            
        </StyledCardListWrapper>
       
    )
}