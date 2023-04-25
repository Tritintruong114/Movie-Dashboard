import React, { useState, useEffect } from "react";
import tmdb from "../../api/tmdb";

const MovieDashBoardContext = React.createContext();
//url?theloai=1

const MovieDataProvider = ({ children }) => {
  const [movieGenreId, setMovieGenreId] = useState([]);
  const [reciveId, setReciveId] = useState(null);
  const [getFetchMoviesWithSearch, setGetFetchMoviesWithSearch] = useState([]);

  const fetchGenresMoviesWithId = async () => {
    const { data } = await tmdb.get(
      `discover/movie?api_key=951a265e3ef47c76b1be4410641ac67e&with_genres=${reciveId}`
    );
    const saveData = await data.results;
    setMovieGenreId(saveData);
  };

  useEffect(() => {
    if (reciveId) {
      fetchGenresMoviesWithId();
    }
  }, [reciveId]);

  return (
    <MovieDashBoardContext.Provider
      value={{
        movieGenreId,
        setReciveId,
        getFetchMoviesWithSearch,
        setGetFetchMoviesWithSearch,
      }}
    >
      {children}
    </MovieDashBoardContext.Provider>
  );
};

export { MovieDashBoardContext, MovieDataProvider };
