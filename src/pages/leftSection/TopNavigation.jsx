import React, { useState } from "react";
import netflixlogo from "./netflixlogo.png";
import { Link } from "react-router-dom";
import {
  UilSearch,
  UilBell,
  UilBars,
  UilMultiply,
} from "@iconscout/react-unicons";
const arrayButtonLink = [
  {
    id: 1,
    name: "News",
    path: "news",
  },
  { path: "movies", id: 2, name: "Movies" },
  { path: "cartoons", id: 3, name: "Cartoons" },
  { path: "series", id: 4, name: "Series" },
];
import tmdb from "../../../api/tmdb";

function TopNavigation() {
  const [open, setOpen] = useState(false);
  const [isSearchClicked, setIsSearchCliced] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      setIsSearchCliced(false);
      console.log(inputValue, "This is Enter action");
      fetchSearchMoviesWithName(inputValue);
    }
  };
  const fetchSearchMoviesWithName = async (inputName) => {
    const { data } = await tmdb.get(`search/movie`, {
      params: { query: inputName },
    });
    const saveData = await data.results;
    console.log(saveData, "THIS IS Testing");
  };

  return (
    <div className="bg-white flex justify-between items-center px-3">
      <Link to={"/"}>
        <div className="z-auto cursor-pointer object-conntain">
          <img className="h-9 cursor-pointer" src={netflixlogo} alt="logo" />
        </div>
      </Link>
      <div
        className={`${
          open ? "top-9" : "top-[-510px]"
        } grid z-10 sm:pl-3 gap-3 text-center absolute font-poppins transition-all sm:transition-none duration-600 ease-in-out opacity-100 top-9 left-0 bg-white w-full sm:relative sm:opacity-100 sm:flex sm:top-0`}
      >
        {arrayButtonLink.map((button) => (
          <Link to={button.path} key={button.id}>
            <h1 className="font-medium hover:bg-red-900 hover:text-white md:hover:text-red-900 md:hover:bg-white py-3">
              {button.name}
            </h1>
          </Link>
        ))}
      </div>
      {!open ? (
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-0 pr-3 sm:hidden"
        >
          <UilBars />
        </div>
      ) : (
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-0 pr-3 sm:hidden"
        >
          <UilMultiply />
        </div>
      )}
      <div className="absolute justify-end gap-1 flex px-3 w-2/4 opacity-0 sm:relative sm:opacity-100">
        {isSearchClicked ? (
          <input
            onChange={handleInputValue}
            onKeyDown={handleEnterDown}
            className="border-b capitalize h-full w-full font-poppins focus:outline-none pl-3 rounded-full transition-all duration-1000"
            placeholder="search"
          />
        ) : (
          <UilSearch
            className="transition-all "
            onClick={() => setIsSearchCliced(!isSearchClicked)}
          />
        )}
        <Link to="login">
          <UilBell />
        </Link>
      </div>
    </div>
  );
}

export default TopNavigation;
