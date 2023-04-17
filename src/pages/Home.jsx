import React from "react";
import { MovieListContainer } from "../components/Movies/MovieListContainer";
import Trending from "../components/Movies/Trending";

function Home() {
  return (
    <div className="h-full  w-full flex flex-col text-center justify-around">
      <Trending />
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
