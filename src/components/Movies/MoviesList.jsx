import React, { useEffect, useState } from "react";
import tmdb from "../../../api/tmdb";

export function MovieInfo({ filmTilte, backDrop }) {
  const getPoster = (poster_path) => {
    return `https://image.tmdb.org/t/p/original${poster_path} `;
  };
  return (
    <div className="  w-3/4 relative sm:w-3/4 md:w-2/4 xl:w-1/6 flex-shrink-0 rounded-xl">
      <img
        className="absolute  object-cover w-full h-full rounded-xl"
        src={getPoster(backDrop)}
      ></img>
      <img
        className="absolute h-10 top-3"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"
      ></img>
      <div className="absolute w-full h-1/4 bg-black bottom-0 opacity-10"></div>
      <h1 className="absolute text-white font-medium bottom-3 left-3 text-sm md:text-lg xl:text-xl">
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
      // console.log(data.results);
    };
    getData();
  }, []);
  console.log(listOfMovies);
  return (
    <div className=" h-full gap-3 w-full flex overflow-x-auto  shadow-xl">
      {listOfMovies.map((movie) => {
        return (
          <MovieInfo
            backDrop={movie.backdrop_path || movie.poster_path}
            filmTilte={movie.original_title}
          />
        );
      })}
    </div>
  );
}

export default MoviesList;
