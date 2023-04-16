import React from "react";

export function MovieInfo() {
  return (
    <div className="bg-red-300 w-3/4 sm:w-3/4 md:w-2/4 xl:w-1/4 flex-shrink-0">
      ABC
    </div>
  );
}
//The component must have flex-shrink-0

function MoviesList({ genres }) {
  return (
    <div className="bg-yellow-300 h-full gap-3 w-full flex overflow-x-auto">
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
      <MovieInfo />
    </div>
  );
}

export default MoviesList;
