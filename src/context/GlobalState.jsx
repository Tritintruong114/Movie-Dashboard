import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initState

const initialState = {
  watchList: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watchEd: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create Context

export const GlobalContext = createContext(initialState);

// Provider components.

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watchEd));
  }, [state]);
  const addMovieToWatchLists = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watchEd: state.watchEd,
        addMovieToWatchLists,
        removeMovieFromWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
