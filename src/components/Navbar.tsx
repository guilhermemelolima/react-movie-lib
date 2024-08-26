import { useState, ChangeEvent, FormEvent } from "react"
import { Link, useNavigate} from "react-router-dom"
import { BiCameraMovie, BiSolidSearchAlt2 } from "react-icons/bi"

import "./NavBar.css"

export const Navbar =() => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);  
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!search) {
            return
        }
        navigate(`/search?q=${search}`)
        setSearch("")
    };

    return(
       <>
        <nav className="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie/> MoviesLib
                </Link>   
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Busque um filme" 
                    onChange={handleSearchInput}
                    value={search}
                />
                <button type="submit">
                    <BiSolidSearchAlt2 />
                </button>
            </form>
        </nav>
       </>
    )
}