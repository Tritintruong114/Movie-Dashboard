import React from "react";

export function MovieInfo() {
  return <div className="bg-red-300 w-1/4 flex-shrink-0">ABC</div>;
}

function MoviesList({ genres }) {
  return (
    <div className="bg-yellow-300 h-full  w-full  absolute flex gap-3 overflow-x-auto">
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
