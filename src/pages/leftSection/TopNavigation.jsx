import React, { useState, useContext, useRef, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import netflixlogo from "./netflixlogo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  UilSearch,
  UilBell,
  UilBars,
  UilMultiply,
  UilSignout,
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

function TopNavigation() {
  const { addMovieToWatchLists } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [isSearchClicked, setIsSearchCliced] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const searchInput = useRef(null);

  const handleInputValue = (event) => {
    const setInput = {
      inputValue: event.target.value,
    };

    setInputValue(setInput.inputValue);
    if (inputValue.length) {
      navigate(event.target.value ? `/search/${event.target.value}` : "/");
    }
  };

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      setIsSearchCliced(false);
      console.log(inputValue, "This is Enter action");
      navigate(event.target.value ? `/search/${event.target.value}` : "/");
    }
  };

  const clickSearchIcon = () => {
    searchInput.current.focus();
    setIsSearchCliced(!isSearchClicked);
  };

  return (
    <div className="bg-white flex justify-between items-center px-3">
      <Link to={"/"}>
        <div className="z-auto h-full w-full cursor-pointer object-conntain">
          <img
            className="xl:h-20 md:h-full xl:w-96 sm:w-80 sm:h-16 h-12 object-cover cursor-pointer"
            src={netflixlogo}
            alt="logo"
          />
        </div>
      </Link>

      <input
        onChange={handleInputValue}
        onKeyDown={handleEnterDown}
        className="border-b capitalize sm:absolute sm:invisible w-1/2 sm:w-full md:w-full right-10 relative font-poppins focus:outline-none pl-3 rounded-full "
        placeholder="search"
        ref={searchInput}
      />

      <div
        className={`${
          open ? "top-12" : "top-[-450px]"
        } grid z-10 sm:pl-3 gap-3 text-center absolute font-poppins transition-all sm:transition-none duration-600 ease-in-out opacity-100 top-9 left-0 bg-white w-full sm:relative sm:opacity-100 sm:flex sm:top-0`}
      >
        <Link to={"/login"}>
          <button className="font-medium sm:absolute sm:invisible hover:bg-red-900 hover:text-white md:hover:text-red-900 md:hover:bg-white py-3">
            Login
          </button>
        </Link>
        {arrayButtonLink.map((button) => (
          <Link key={button.id}>
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
      <div className="absolute justify-end gap-1 flex px-3 w-2/4 opacity-0 sm:relative sm:opacity-100 md:w-full">
        {isSearchClicked ? (
          <input
            onChange={handleInputValue}
            onKeyDown={handleEnterDown}
            className="border-b capitalize w-full font-poppins focus:outline-none pl-3 rounded-full transition-all duration-1000"
            placeholder="search"
            ref={searchInput}
          />
        ) : (
          <UilSearch
            className="transition-all "
            onClick={() => setIsSearchCliced(!isSearchClicked)}
          />
        )}
      </div>
    </div>
  );
}

export default TopNavigation;
