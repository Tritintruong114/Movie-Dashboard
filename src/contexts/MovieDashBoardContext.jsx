import React, { useState, useEffect } from "react";
import tmdb from "../../api/tmdb";
const MovieDashBoardContext = React.createContext();

const MovieDataProvider = ({ children }) => {
  const [movieGenreId, setMovieGenreId] = useState([]);

  const [reciveId, setReciveId] = useState(null);

  const fetchGenresMoviesWithId = async () => {
    const { data } = await tmdb.get(
      `discover/movie?api_key=951a265e3ef47c76b1be4410641ac67e&with_genres=${reciveId}`
    );
    const saveData = await data.results;
    console.log(saveData, `This is data of genre id ${reciveId}`);
    setMovieGenreId(saveData);
  };

  useEffect(() => {
    if (reciveId) {
      fetchGenresMoviesWithId();
    }
  }, [reciveId]);

  return (
    <MovieDashBoardContext.Provider value={{ movieGenreId, setReciveId }}>
      {children}
    </MovieDashBoardContext.Provider>
  );
};

export { MovieDashBoardContext, MovieDataProvider };