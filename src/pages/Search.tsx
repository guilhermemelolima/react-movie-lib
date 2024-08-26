import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { MovieCard } from "../components/MovieCard"
import { MovieType } from "../types/MovieType"

import './MoviesGrid.css'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

export const Search =() => {

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState<MovieType[]>([]);
    const query = searchParams.get("q");

    const getsearchdMovies = async (url: string) =>{
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
    }

    useEffect(() =>{
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        getsearchdMovies(searchWithQueryURL)
    }, [query])

    return(
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query?.toUpperCase()}</span> </h2>
            <div className="movies-container">
                {movies && movies.map(movie => <MovieCard movie={movie} showLink key={movie.id}/>)}
            </div>
        </div>
    )
}