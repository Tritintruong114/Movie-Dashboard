import React, { useState } from "react";
import netflixlogo from "../../../public/assets/netflixlogo.png";
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
function TopNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white flex justify-between items-center px-3">
      <div className="z-auto">
        <img className="h-9" src={netflixlogo} alt="logo"></img>
      </div>
      <div
        className={`${
          open ? "top-9" : "top-[-510px]"
        } grid z-0 gap-3 text-center absolute font-poppins transition-all sm:transition-none duration-600 ease-in-out opacity-100 pl-3 top-9 left-0 bg-white w-full sm:relative sm:opacity-100 sm:flex sm:top-0`}
      >
        {arrayButtonLink.map((button) => (
          <Link to={button.path} key={button.id}>
            {button.name}
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
      <div className="absolute flex gap-3 px-3 opacity-0 sm:relative sm:opacity-100">
        <UilSearch />
        <UilBell />
      </div>
    </div>
  );
}

export default TopNavigation;
