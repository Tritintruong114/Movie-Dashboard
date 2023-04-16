import React from "react";
import MoviesList from "../components/Movies/MoviesList";

function Home() {
  return (
    <div className="h-full  w-full flex flex-col text-center justify-around">
      <div className="h-1/4 md:h-2/5 xl:h-3/5 bg-slate-400 p-3">
        <div className="w-full bg-purple-300 h-full">
          This is the Componet Trending movies
        </div>
      </div>
      <div className="bg-red-600 gap-3 p-3 overflow-x-scroll  w-full h-3/4  flex    ">
        <MoviesList />
      </div>
    </div>
  );
}

export default Home;
