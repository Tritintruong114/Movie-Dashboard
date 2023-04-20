import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import tmdb from "../../api/tmdb";

const Community = () => {
  const { watchList } = useContext(GlobalContext);
  const [getMovies, setGetMovies] = useState([]);
  const [getTvShows, setGetTvShows] = useState([]);
  const getPoster = (poster_path) => {
    return `https://image.tmdb.org/t/p/original${poster_path}`;
  };
  const fetchGetMoviesGenres = async () => {
    const { data } = await tmdb.get();
  };
  useEffect(() => {
    const fetchGetTvShowsGenres = async () => {
      const { data } = await tmdb.get("tv/popular");
      setGetTvShows(data.results);
    };
    fetchGetTvShowsGenres();
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center font-poppins xl:p-3">
      <div className=" rounded-3xl h-full w-full p-3">
        <div>
          <h1 className="font-bold text-2xl py-3">Hi, What next?</h1>
        </div>
        <div className="w-full flex gap-3">
          <Link>
            <button className="bg-red-900 text-white px-3 rounded-xl">
              Movies
            </button>
          </Link>
          <Link>
            <button
              onClick={() => console.log(getTvShows)}
              className="bg-red-900 text-white px-3 rounded-xl"
            >
              Tv Shows
            </button>
          </Link>
        </div>
        <div className="w-full h-full py-3">
          <h1 className="py-3 font-bold text-lg text-red-900">Tv Shows</h1>
          <div className="w-full h-1/4  flex overflow-auto gap-3">
            {getTvShows.map((show) => {
              return (
                <div
                  key={show.id}
                  className="w-2/4 relative h-full flex-shrink-0 rounded-xl flex flex-col items-center justify-center"
                >
                  <img
                    className="h-full w-full rounded-3xl object-top object-cover"
                    src={getPoster(show.poster_path)}
                  ></img>
                  <h1 className=" absolute text-white bottom-0 text-center font-bold">
                    {show.name}
                  </h1>
                </div>
              );
            })}
          </div>
          <div>
            <h1>Watch Lists</h1>
            <h1 className="py-3 font-bold text-lg text-red-900">
              {watchList.map((movie) => {
                return <h1>{movie.title}</h1>;
              })}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
