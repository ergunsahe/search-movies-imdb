import styled from "styled-components"

export const NavbarStyledWrapper=styled.div`
    background-color:#e0e0e0;
    padding:1rem;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid gray;


`
export const NavbarStyledLink=styled.a`
    text-decoration:none;
    margin-right:1rem;
    background-color:#bdbdbd;
    padding:0.3rem;
    border-radius:1.5rem;
    font-weight:bold;
       
    a:link{
        color:green;
    },
    a:visited {
        color: pink;
    },
    a:hover {
        color: red;
    }
}
`
