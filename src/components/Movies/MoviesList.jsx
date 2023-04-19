import React, { useEffect, useState } from "react";
import tmdb from "../../../api/tmdb";

export function MovieInfo({ filmTilte, backDrop }) {
  const getPoster = (poster_path) => {
    return `https://image.tmdb.org/t/p/original${poster_path}`;
  };
  return (
    <div className="bg-red-300 w-3/4 relative sm:w-3/4 md:w-2/4 xl:w-1/4 flex-shrink-0">
      <img
        className="absolute  object-cover w-full h-full"
        src={getPoster(backDrop)}
      ></img>
      <h1 className="absolute text-white font-medium bottom-3 left-3">
        {filmTilte}
      </h1>
    </div>
  );
}
//The component must have flex-shrink-0

function MoviesList({ genresId }) {
  const [listOfMovies, setListOfMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await tmdb.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=951a265e3ef47c76b1be4410641ac67e&with_genres=${genresId}`
      );
      setListOfMovies(data.results);
      console.log(data.results);
    };
    getData();
  }, []);
  console.log(listOfMovies);
  return (
    <div className="bg-yellow-300 h-full gap-3 w-full flex overflow-x-auto">
      {listOfMovies.map((movie) => {
        return (
          <MovieInfo
            backDrop={movie.backdrop_path}
            filmTilte={movie.original_title}
          />
        );
      })}
    </div>
  );
}

export default MoviesList;
