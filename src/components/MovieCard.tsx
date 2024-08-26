import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

import { MovieType } from "../types/MovieType";

const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({movie, showLink} : {movie: MovieType, showLink: boolean}) => {
    return(
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar id="star"/> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}