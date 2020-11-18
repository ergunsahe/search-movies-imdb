import styled from "styled-components";

export const StyledCardWrapper=styled.div`
        background-color: white;
        width:25rem;
        height:30rem;
        border-radius:1rem;
        background-color:#bdbd59;
        box-shadow:0.5rem 0.5rem 0.7rem rgba(0,0,0,0.4);
        transition:0.3s;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        &:hover{
            transform: scale(1.1);
            box-shadow: 0.3rem 0.3rem 0.9rem rgba(0,0,0,0.1);
        }
    `;

export const StyledCardText=styled.p`
    font-size:1.5rem;
    margin-left:0.5rem;
    color:#565656;

`;

export const StyledCardImg=styled.img`
    height:81%;
    width:99%;
    align-self:center;
    border-radius:1rem;
    margin:0;
`;

