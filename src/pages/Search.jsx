import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tmdb from "../../api/tmdb";

const Search = () => {
  const { name } = useParams();
  const [getDataSearch, setGetDataSearch] = useState([]);

  const getPoster = (poster_path) => {
    return `https://image.tmdb.org/t/p/original${poster_path}`;
  };
  useEffect(() => {
    const fetchSearchMoviesWithName = async () => {
      const { data } = await tmdb.get(`search/movie`, {
        params: { query: name },
      });
      const saveData = await data.results;
      setGetDataSearch(saveData);
      // console.log(saveData, "from Search Component");
    };
    fetchSearchMoviesWithName();
  }, [name]);

  console.log(getDataSearch);
  return (
    <div className="w full h-full grid grid-cols-3 gap-6 overflow-auto p-3">
      {getDataSearch.map((movie) => {
        return (
          <div className="w-full h-full relative flex items-center justify-center text-center flex-shrink-0">
            <Link to={`/detail/${movie.id}`}>
              {/* <img
                className="absolute h-20 top-3 left-0 rounded-xl"
                src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"
              ></img> */}
              <img
                className="h-full w-full object-cover rounded-3xl"
                src={getPoster(movie.poster_path)}
              ></img>
            </Link>
            {/* <h1 className="absolute bottom-0 text-white font-poppins text-xl w-3/4">
              {movie.original_title}
            </h1> */}
          </div>
        );
      })}
    </div>
  );
};

export default Search;
