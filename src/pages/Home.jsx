import React from "react";
import { MovieListContainer } from "../components/Movies/MovieListContainer";
import Trending from "../components/Movies/Trending";

function Home() {
  return (
    <div className="h-full w-full flex font-poppins flex-col text-center justify-around">
      <Trending />
      <div className="gap-3 p-3 flex-col w-full h-full flex">
        <h1 className="text-3xl text-left font-bold text-red-900 w-fit border-b-4 border-red-950">
          Crime
        </h1>
        <MovieListContainer genresId={80} />
        <h1 className="text-3xl text-left font-bold text-red-900 w-fit border-b-4 border-red-950">
          Animation
        </h1>
        <MovieListContainer genresId={16} />
        <h1 className="text-3xl text-left font-bold text-red-900 w-fit border-b-4 border-red-950">
          War
        </h1>
        <MovieListContainer genresId={10752} />
        <h1 className="text-3xl text-left font-bold text-red-900 w-fit border-b-4 border-red-950">
          History
        </h1>
        <MovieListContainer genresId={36} />
        <h1 className="text-3xl text-left font-bold text-red-900 w-fit border-b-4 border-red-950">
          Western
        </h1>
        <MovieListContainer genresId={37} />
      </div>
    </div>
  );
}

export default Home;
