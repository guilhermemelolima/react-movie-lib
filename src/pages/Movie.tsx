import { useState, useEffect, CSSProperties } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";

import { MovieType } from "../types/MovieType";

import { FaStar } from "react-icons/fa"


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

import "./Movie.css"

import { CastCard } from "../components/CastCard";
import { CastType } from "../types/CastType";
import { GenreType } from "../types/GenreType";
import { VideoType } from "../types/VideoType";

import {Swiper, SwiperSlide} from 'swiper/react'

export const Movie =() => {
    const {id} = useParams();
    const [movie, setMovie] = useState<MovieType>();
    const [cast, setCast] = useState<CastType[]>([]); ;
    const [video, setVideo] = useState<VideoType[]>([])

    const getMovie = async (url: string) =>{
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    }

    const getCast = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        
        const cast = data.cast.map((cast: CastType) => ({
            id: cast.id,
            name: cast.name,
            character: cast.character,
            profile_path: cast.profile_path,
            known_for_department: cast.known_for_department
        }));
        setCast(cast);
    }

    const getVideo = async (url:string) => {
        const res = await fetch(url);
        const data = await res.json();
        const videos = data.results.map((video: VideoType) =>({
            key: video.key
        }));
        setVideo(videos)
    }

    useEffect(()=>{
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-br`;
        getMovie(movieUrl)

        const castUrl = `${moviesURL}${id}/credits?${apiKey}&language=pt-br`;
        getCast(castUrl)

        const videoUrl = `${moviesURL}${id}/videos?${apiKey}`
        getVideo(videoUrl)
    },[id])

    const formatCurrency = (number: number) => {
        return number.toLocaleString("en-US",{
            style:"currency",
            currency:"USD"
        })
    }


    return(
        <div className="movie-page" >
            {movie && 
                <>
                    <h2>{movie.title}</h2>
                    <div className="poster"></div>
                    <div className="movie-card">
                        <img src={imageUrl + movie.poster_path} alt={movie.title} />
                    
                    </div>
                    <div className="details">
                        <p>
                            <FaStar id="star"/> {movie.vote_average}
                        </p>
                        <p className="tagline">{movie.tagline}</p>
                        <div className="genre">
                            {
                                movie.genres.map((genre: GenreType) => (
                                        <span key={genre.id} className="genre-tag">{genre.name}</span>
                                ))
                            }
                        </div>
                        <div className="info">
                            <h3> <BsWallet2/> Orçamento: </h3>
                            <p>{formatCurrency(movie.budget)}</p>
                        </div>
                        <div className="info">
                            <h3> <BsGraphUp/> Receita: </h3>
                            <p>{formatCurrency(movie.revenue)}</p>
                        </div>
                        <div className="info">
                            <h3> <BsHourglassSplit/> Duração:</h3>
                            <p>{movie.runtime} minutos</p>
                        </div>
                        
                        <div className="info description">
                            <h3> <BsFillFileEarmarkTextFill/> Descrição: </h3>
                            <p>{movie.overview} minutos</p>
                        </div>
                    </div>
                    
                    <div className="videos">
                        <h3>Trailers</h3>
                        <Swiper
                            slidesPerView={1}
                            pagination={{clickable: true}}
                            navigation
                            style={{
                                "--swiper-navigation-color": "#bb86fc",
                                "--swiper-pagination-color": "#bb86fc",
                                "--swiper-pagination-bullet-inactive-color": "#999999",
                              }as CSSProperties }>
                            {video.map((video) =>(
                                <SwiperSlide>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${video.key}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="cast">
                        <h3>Atores:</h3>
                        {cast.map((cast: CastType) => (
                            cast.known_for_department === "Acting" &&  cast.profile_path &&(
                                <div key={cast.id}>
                                    <CastCard cast={cast} />
                                </div>
                            )
                        ))}
                    </div>
                </>
            }
        </div>
    )
}