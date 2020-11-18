import {Link} from "react-router-dom"
import {NavbarStyledWrapper, NavbarStyledLink} from "./Navbar.stye"





const contact="https://www.themoviedb.org/about/staying-in-touch"
const imdbHomePage="https://www.themoviedb.org/"
export default function Navbar() {
    
    return (
        <NavbarStyledWrapper>
            <Link style={{textDecoration: "none", backgroundColor:"#bdbdbd", fontWeight:"bold", borderRadius:15, padding:3}} to="/">Home</Link>
            {/* <Link style={{textDecoration: "none", backgroundColor:"#bdbdbd", fontWeight:"bold", borderRadius:15, padding:3}} to="/popular">Popular</Link> */}
            <NavbarStyledLink href={contact}>Contact to IMDB</NavbarStyledLink>
            <NavbarStyledLink href={imdbHomePage}>Homepage IMDB</NavbarStyledLink>
        </NavbarStyledWrapper>
    )
}
