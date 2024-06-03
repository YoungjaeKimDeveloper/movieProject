import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire from "../../image/fire.png";
import { MovieCard } from "../MovieCard/MovieCard";

const MovieList = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  // Fetch the Data
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=742ab4305c312e8d858db80829dc3e15"
    );
    const data = await response.json();
    setMoviesData(data.results);
    // Store in the copyMovies to prevent original Data
    setCopyMovies(data.results);
  };
  // Store the Data
  const [movies, setMoviesData] = useState([]);
  // Copy the original Data
  const [copyMovies, setCopyMovies] = useState([]);
  // Store the data
  const [rating, setRating] = useState(0);
  // set the minimum data value
  // Filter Handling
  const handleFiltering = (rate) => {
    if (rating == rate) {
      setRating(0);
      setCopyMovies(movies);
    } else {
      setRating(rate);
      const filtered = movies.filter((value) => value.vote_average >= rate);
      setCopyMovies(filtered);
    }
  };

  return (
    <div>
      <div className="movieListHeader">
        <h1 className="movieListHeader_title">
          Popular
          <img
            src={Fire}
            alt="fire_icon"
            className="movieListHeader_title_icon"
          />
        </h1>
        <div className="movieListHeader_filters">
          <button
            className={
              rating == 8
                ? "movieListHeader_filters_filter active"
                : "movieListHeader_filters_filter "
            }
            onClick={() => handleFiltering(8)}
          >
            8+ Star
          </button>
          <button
            className={
              rating == 7
                ? "movieListHeader_filters_filter active"
                : "movieListHeader_filters_filter"
            }
            onClick={() => handleFiltering(7)}
          >
            7+ Star
          </button>
          <button
            className={
              rating == 6
                ? "movieListHeader_filters_filter active"
                : "movieListHeader_filters_filter"
            }
            onClick={() => handleFiltering(6)}
          >
            6+ Star
          </button>
          <select name="" id="" className="movieListHeader_filters_select">
            <option value="">Date</option>
            <option value="">Rating</option>
            <option value="">Reviews</option>
          </select>
          <select name="" id="" className="movieListHeader_filters_select">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </div>
      <div className="movieList">
        {copyMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
