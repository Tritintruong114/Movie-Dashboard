import React, { useEffect, useState, createContext } from "react";
import tmdb from "../../../api/tmdb";

function MovieList() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [movieGenreId, setMovieGenreId] = useState([]);

  //This function is for the Poster of the Movie
  const getPoster = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
  };
  //This function is for the Fetching Data and return Data with specific movieGenreID
  const fetchGenresMoviesWithId = async (idGenre) => {
    const { data } = await tmdb.get(
      `discover/movie?api_key=951a265e3ef47c76b1be4410641ac67e&with_genres=${idGenre}`
    );
    const saveData = await data.results;
    console.log(saveData);
    setMovieGenreId(saveData);
  };

  //This useEffect for fetching the Data when first time Render and Re-render.
  useEffect(() => {
    //fetching trending movies
    const fetchTrendingMovies = async () => {
      const { data } = await tmdb.get("trending/all/day");
      setMoviesTrending(data.results);
      const getData = `${data.results.map((result) => result.id)}`;
      //This is for the detail of movie id to get key.
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <button>Testing data</button>
      <div className="grid grid-cols-3 gap-2">
        {moviesGenres.map((genre) => {
          return (
            <div key={genre.id}>
              <button
                className="bg-slate-400 rounded-full px-3 py-1"
                onClick={() => fetchGenresMoviesWithId(genre.id)}
              >
                {genre.name}
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full flex gap-3">
        {movieGenreId.map((movie) => {
          return (
            <div key={movie.id}>
              <h1>{movie.original_title}</h1>
              <img src={getPoster(movie.poster_path)}></img>
            </div>
          );
        })}
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default MovieList;
