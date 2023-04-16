import React from "react";
import { MovieListContainer } from "../components/Movies/MovieListContainer";

function Home() {
  return (
    <div className="h-full  w-full flex flex-col text-center justify-around">
      <div className="h-1/4 md:h-2/5 xl:h-3/5 bg-slate-400 p-3">
        <div className="w-full bg-purple-300 h-full">
          This is the Componet Trending movies
        </div>
      </div>
      <div className="bg-red-600 gap-3 p-3 flex-col overflow-auto w-full h-3/4 flex">
        <MovieListContainer />
        <MovieListContainer />
        <MovieListContainer />
        <MovieListContainer />
        <MovieListContainer />
      </div>
    </div>
  );
}

export default Home;
