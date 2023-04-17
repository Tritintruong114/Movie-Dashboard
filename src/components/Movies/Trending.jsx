import React, { useEffect, useState } from "react";
import tmdb from "../../../api/tmdb";
import { UilPlay } from "@iconscout/react-unicons";
function Trending() {
  const [moviesTrending, setMoviesTrending] = useState([]);

  //This function is for the Poster of the Movie
  const getPoster = (poster_path) => {
    return `https://image.tmdb.org/t/p/original${poster_path}`;
  };
  useEffect(() => {
    //fetching trending movies
    const fetchTrendingMovies = async () => {
      const { data } = await tmdb.get("trending/all/day");
      setMoviesTrending(data.results);
      //This is for the detail of movie id to get key.
      // const getData = `${data.results.map((result) => result.id)}`;
      // console.log(data);
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div className="h-1/4 font-poppins md:h-2/5 xl:h-3/6  p-3 flex ">
      <div className="w-full h-full flex overflow-auto relative flex-shrink-0">
        <div className="absolute blur-3xl bg-white h-1/4 rounded-full w-full bottom-0 opacity-30"></div>
        <img
          className=" object-cover w-full h-full rounded-3xl"
          src={getPoster("/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg")}
        ></img>
        <div className="absolute bottom-0 flex flex-col text-left p-3 pl-6 gap-3">
          <h1 className=" text-white font-bold xl:text-3xl w-3/4">
            Demon Slayer: Kimetsu no Yaiba
          </h1>
          <button className="w-fit px-3 xl:px-5 xl:py-3 text-xs flex gap-1 md:text-sm py-1 items-center font-medium md:px-3 md:py-1 rounded-xl text-white bg-red-900">
            <UilPlay /> Watch Now
          </button>
        </div>
        <div className="absolute rounded-l-3xl p-3 opacity-0 gap-3  overflow-auto flex md:opacity-100 bg-slate-500 xl:w-1/2 xl:h-2/6 md:w-2/4 md:h-1/3 bottom-3 right-0">
          <div className="h-full w-1/2 flex-shrink-0 bg-slate-600">ABC</div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
