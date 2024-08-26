import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import { MovieType } from "../types/MovieType";

const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie, showLink }: { movie: MovieType, showLink: boolean }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="movie-card">
      {!imageLoaded && (
        <Skeleton variant="rectangular" width={200} height={300} />
      )}
      <img
        src={imageUrl + movie.poster_path}
        alt={movie.title}
        style={{ display: imageLoaded ? "block" : "none" }}
        onLoad={() => setImageLoaded(true)}
        width={200}
        height={300}
      />
      <h2>{movie.title}</h2>
      <p>
        <FaStar id="star" /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};
