import React from "react";
import { MovieListContainer } from "../components/Movies/MovieListContainer";
import Trending from "../components/Movies/Trending";

function Home() {
  return (
    <div className="h-full w-full flex flex-col text-center justify-around">
      <Trending autoslide={true} autoSlideInterval={1000} />
      <div className="gap-3 p-3 flex-col w-full h-full flex">
        <MovieListContainer />
      </div>
    </div>
  );
}

export default Home;
