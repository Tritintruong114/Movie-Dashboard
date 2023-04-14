import React, { useEffect, useState, createContext } from "react";
import tmdb from "../../../api/tmdb";

function MovieList() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);

  const getPoster = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
  };

  const testingData = () => {
    console.log(moviesTrending, "Trending Movies"); //working ok with Render
    console.log(moviesGenres, "Genres Movies"); //working ok with Render
  };

  useEffect(() => {
    //fetching trending movies
    const fetchTrendingMovies = async () => {
      const { data } = await tmdb.get("trending/all/day");
      setMoviesTrending(data.results);
      const getData = `${data.results.map((result) => result.id)}`;
      console.log(getData);
      //This is for the detail of movie id to get key.
    };
    fetchTrendingMovies();

    //fetching genre movies
    const fetchGenresMovies = async () => {
      const { data } = await tmdb.get("genre/movie/list");
      setMoviesGenres(data.genres);
      const getData = data.genres;
    };
    fetchGenresMovies();
  }, []);

  return (
    <div>
      <button onClick={testingData}>Testing data</button>
      {moviesGenres.map((genre) => {
        return (
          <div key={genre.id}>
            <button>{genre.name}</button>
          </div>
        );
      })}
      {moviesTrending.map((movie) => {
        return (
          <div key={movie.id}>
            {movie.original_title}
            {movie.id}
            {movie.release_date}
            <img src={getPoster(movie.poster_path)}></img>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
