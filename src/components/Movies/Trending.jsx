import React, { useEffect, useState } from "react";
import tmdb from "../../../api/tmdb";
import { UilPlay, UilInfo } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

function Trending() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [getIdForTrailer, setGetIdForTrailer] = useState([]);
  const [getKey, setGetKey] = useState([]);
  const [listOfTrailer, setListOfTrailer] = useState([]);

  //This function is for the Poster of the Movie
  const getPoster = (poster_path) => {
    return `https://image.tmdb.org/t/p/original${poster_path}`;
  };
  const getTrailer = (filmkey) => {
    return `https://www.youtube.com/embed/${filmkey}`;
  };
  useEffect(() => {
    //fetching trending movies
    const fetchTrendingMovies = async () => {
      const { data } = await tmdb.get("trending/all/day");
      setMoviesTrending(data.results); //
      const getData = `${data.results.map((result) => result.id)}`;
      setGetIdForTrailer(getData);
      console.log(data.results.map((result) => result.id));
      return getData;
    };
    //fetchVideoTrailer
    const getUrlForVideo = async () => {
      const getData = await fetchTrendingMovies();
      const { data } = await tmdb.get(`movie/${getIdForTrailer}/videos`);
      // console.log(data.results);
      setListOfTrailer(data.results.slice(0, 3));
    };
    getUrlForVideo();
  }, []);
  console.log(listOfTrailer.map((e) => e.key));
  return (
    <div
      style={{ transform: `translateX` }}
      className="h-2/4 font-poppins gap-4 snap-x snap-mandatory overflow-x-scroll md:h-4/5 xl:h-full  p-3 flex transition-transform ease-out duration-500"
    >
      {moviesTrending.map((movie) => {
        return (
          <div
            key={movie.id}
            className="w-full h-full flex  flex-shrink-0  relative"
          >
            <div className="w-full h-full flex-shrink-0">
              <div className="absolute blur-3xl bg-white h-1/4 rounded-full w-full bottom-0 opacity-30"></div>
              <img
                className=" object-cover w-full h-full rounded-3xl"
                src={getPoster(`${movie.backdrop_path}`)}
              ></img>
              <div className="absolute bottom-0 flex flex-col text-left p-3 pl-12 gap-3 md:bottom-3 xl:bottom-1/4">
                <h1 className=" text-white font-bold md:text-xl xl:text-3xl md:w-3/5 xl:w-3/4">
                  {movie.original_title || movie.title || movie.name}
                </h1>
                <div className="flex items-center text-center gap-1">
                  <button className="w-fit px-3 xl:px-5 xl:py-3 text-xs flex gap-1 md:text-sm py-1 items-center font-medium md:px-3 md:py-1 rounded-xl text-white bg-red-900">
                    <UilPlay /> Watch Now
                  </button>
                  <Link to={`/detail/${movie.id}`}>
                    <button className="bg-red-900 flex items-center text-white w-fit p-1 rounded-xl">
                      <UilInfo size="21" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="absolute rounded-xl p-6 opacity-0 gap-3 overflow-auto flex md:opacity-100 bg-black bg-opacity-5 backdrop-blur-3xl xl:w-1/2 xl:h-3/6 md:w-2/4 md:h-1/3 bottom-3 right-0">
                <div className="h-full w-3/4 xl:w-3/4 flex-shrink-0 relative ">
                  <iframe
                    className="absolute h-full w-full rounded-xl"
                    src={getTrailer("LTFGH0rJ-EY")}
                    allowFullScreen
                  ></iframe>
                </div>{" "}
                <div className="h-full w-3/4 xl:w-3/4 flex-shrink-0 relative ">
                  <iframe
                    className="absolute h-full w-full rounded-xl"
                    src={getTrailer("LTFGH0rJ-EY")}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Trending;
