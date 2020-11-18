import styled from "styled-components";

export const StyledBoxWrapper=styled.div`
        justify-content:center;
        margin-top:3rem;
        background-color:#e0e0e0;
    `;
export const StyledBoxInput=styled.input`
    border-radius:1rem;
    color:#565656;
    margin:1rem;
    width:22rem;
    padding:0.7rem;
    border:1px;
    outline:none;
    box-shadow:0.5rem 0.5rem 0.7rem rgba(0,0,0,0.5);
    &:hover{
            box-shadow:0.2rem 0.2rem 0.9rem rgba(0,0,0,0.6);
        }
    

`
export const StyledBoxButton=styled.button`
        padding:0.5rem;
        font-size:1rem;
        font-weight:bold;
        border-radius:1rem;
        border:1px;
        outline:none;
        box-shadow:0.5rem 0.5rem 0.5rem rgba(0,0,0,0.4);
        background-color:#d9d9d9;
        &:hover{
            box-shadow:0.2rem 0.2rem 0.9rem rgba(0,0,0,0.6);
        }

`