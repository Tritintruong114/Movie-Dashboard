import React, { useEffect, useState } from "react";
import tmdb from "../../../api/tmdb";

function MovieList() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState();
  const getPoster = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
  };
  const testingData = () => {
    console.log(moviesTrending, "Trending Movies");
    console.log(moviesGenres, "Genres Movies");
  };
  useEffect(() => {
    //fetching trending movies
    const fetchTrendingMovies = async () => {
      const { data } = await tmdb.get("trending/all/day");
      setMoviesTrending(data.results);
      console.log(data.results, "Fetching Trending Movies");
    };
    fetchTrendingMovies();
    //fetching genres of movies
    const fetchGenresMovies = async () => {
      const { data } = await tmdb.get("genre/movie/list");
      setMoviesGenres(data.genres);
      console.log(data.genres, "Fetching Genres success");
    };
    fetchGenresMovies();
  }, []);

  return (
    <div>
      <button onClick={testingData}>Testing data</button>
      <div>
        {moviesGenres.map((genres) => {
          return <button>{genres.name}</button>;
        })}
      </div>
      {moviesTrending.map((movie) => {
        return (
          <div key={movie.id}>
            {movie.original_title}
            <img src={getPoster(movie.poster_path)}></img>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
