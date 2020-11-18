import styled from "styled-components";

export const StyledMoviDetailWrapper=styled.div`
        background-color:#e0e0e0;
        
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        
    `;
export const StyledMoviDetailTextWrapper=styled.div`
        
        margin-top:3rem;
        width:35rem;
        height:45rem;
        border-radius:1rem;
        background-color:#bdbd59;
        box-shadow:0.5rem 0.5rem 0.7rem rgba(0,0,0,0.4);
        display:flex;
        flex-direction:column;
        
        
    `;

export const StyledMoviDetailText=styled.p`
    font-size:1.3rem;
    margin-left:0.5rem;
    color:#565656;

`;
export const StyledMoviDetailLink=styled.a`
    font-size:1.5rem;
    margin-left:0.5rem;
    color:#565656;

`;
export const StyledMoviDetailHeader=styled.h1`
    font-size:1.5rem;
    margin-left:0.5rem;
    color:#565656;

`;

export const StyledMoviDetailImg=styled.img`
    height:45rem;
    width:auto;
    align-self:center;
    border-radius:1rem;
    box-shadow:0.5rem 0.5rem 0.7rem rgba(0,0,0,0.4);
    margin-top:3rem;
`;
