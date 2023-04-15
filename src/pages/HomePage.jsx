import React, { useEffect } from "react";
import { useContext } from "react";
import { MovieDashBoardContext } from "../contexts/MovieDashBoardContext";

function HomePage() {
  const { movieGenreId, setReciveId } = useContext(MovieDashBoardContext);

  return (
    <div>
      <button className="bg-slate-600" onClick={() => setReciveId(27)}>
        CLICK HERE
      </button>
      {movieGenreId.map((movie) => (
        <h1>{movie.original_title}</h1>
      ))}
    </div>
  );
}

export default HomePage;
