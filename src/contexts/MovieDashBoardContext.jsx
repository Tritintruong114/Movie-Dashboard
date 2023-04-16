import React, { useState, useEffect } from "react";
import tmdb from "../../api/tmdb";

const MovieDashBoardContext = React.createContext();
//url?theloai=1

const MovieDataProvider = ({ children }) => {
  const [movieGenreId, setMovieGenreId] = useState([]);
  const [inputValueForSearch, setInputValueForSearch] = useState("");
  const [reciveId, setReciveId] = useState(null);

  const fetchGenresMoviesWithId = async () => {
    const { data } = await tmdb.get(
      `discover/movie?api_key=951a265e3ef47c76b1be4410641ac67e&with_genres=${reciveId}`
    );
    const saveData = await data.results;
    console.log(saveData, `This is data of genre id ${reciveId}`);
    setMovieGenreId(saveData);
  };
  const fetchSearchMoviesWithName = async (inputName) => {
    const { data } = await tmdb.get(`search/movie`, {
      params: { query: inputName },
    });
    const saveData = await data.results;
    console.log(saveData, "THIS IS Testing");
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
        fetchSearchMoviesWithName,
        setInputValueForSearch,
      }}
    >
      {children}
    </MovieDashBoardContext.Provider>
  );
};

export { MovieDashBoardContext, MovieDataProvider };
