import React, { useEffect, useState } from "react";
import Star from "../../image/star.png";
import "./MovieCard.css";
export const MovieCard = ({ movie }) => {
  return (
    <a className="movieCard" href="https://www.naver.com/" target="_blank">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
        className="movieCard-image"
      />
      <div className="movieCard-details">
        <p className="details-title">{movie.original_title}</p>
        <div className="movie-card-details-middle">
          <p>{movie.release_date}</p>
          <div className="movie-card-details-middle-left">
            <p>{movie.vote_average.toFixed(2)}</p>
            <img
              src={Star}
              alt="star"
              className="movie-card-details-middle-icon"
            />
          </div>
        </div>
        <p className="movie-card-details-description">
          {movie.overview.slice(0, 50) + "..."}
        </p>
      </div>
    </a>
  );
};
