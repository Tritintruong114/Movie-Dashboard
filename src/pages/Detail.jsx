import React, { useEffect, useState, useContext } from "react";
import tmdb from "../../api/tmdb";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { UilPlay, UilInfo, UilHeart } from "@iconscout/react-unicons";

//useParam lay ID , nhu trong khi set Router da dat "detail:id"
const Detail = () => {
  const { addMovieToWatchLists, watchList } = useContext(GlobalContext);

  const getPoster = (poster_path) => {
    return `https://image.tmdb.org/t/p/original${poster_path}`;
  };
  let { movieId } = useParams();
  console.log(movieId);

  const getTrailer = (filmkey) => {
    return `https://www.youtube.com/embed/${filmkey}`;
  };
  const [getDetail, setGetDetail] = useState({});
  const [listOfVideos, setListOfVideos] = useState([]);
  const [getCredits, setGetCredits] = useState([]);

  let storedMovie = watchList.find((movie) => movie?.id === movie?.id);

  useEffect(() => {
    const fetchDetailMovie = async () => {
      try {
        const data = await tmdb.get(`movie/${movieId}`);
        const saveData = data;
        setGetDetail(saveData);
      } catch (error) {}
    };
    fetchDetailMovie();

    const getUrlForVideo = async () => {
      const { data } = await tmdb.get(`movie/${movieId}/videos`);
      // console.log(data.results);
      setListOfVideos(data.results.slice(0, 3));
    };
    getUrlForVideo();

    const getCast = async () => {
      const { data } = await tmdb.get(`movie/${movieId}/credits`);
      setGetCredits(data.cast.slice(0, 10));
    };
    getCast();
  }, []);

  return (
    <div className="h-full overflow-auto text-white w-full relative font-poppins">
      <img
        className="h-full object-cover absolute w-full object-top"
        src={getPoster(`${getDetail?.data?.backdrop_path}`)}
      ></img>
      <div className="w-full h-full overflow-hidden">
        <div className="absolute bg-black opacity-60 w-full h-full blur"></div>
        <div className="absolute overflow-auto h-full w-full text-center justify-center items-center p-3 rounded-xl">
          <div className="w-full h-1/2 relative flex">
            <div className="w-1/2 h-full">
              <img
                className="w-full h-full object-cover object-center md:object-scale-down"
                src={getPoster(`${getDetail?.data?.poster_path}`)}
              ></img>
            </div>

            <div className="h-full w-1/2 p-3 overflow-auto xl:w-3/4 text-center flex justify-center items-center flex-col">
              <h1 className="text-white font-bold text-xl pb-3">
                {getDetail?.data?.original_title}
              </h1>
              <div className="flex items-center justify-center gap-3 flex-col  text-center">
                <div className="flex gap-1 items-center">
                  <button
                    disabled={
                      storedMovie?.id === getDetail?.data?.id ? true : false
                    }
                    onClick={() => addMovieToWatchLists(getDetail.data)}
                    className="text-white bg-red-900 rounded-xl px-2 py-1"
                  >
                    <UilHeart />
                  </button>
                  <p className="text-black bg-yellow-400 rounded-xl text-sm font-bold ">
                    IMDb : {Math.floor(getDetail?.data?.vote_average)}
                  </p>
                  <p>{Math.floor(getDetail?.data?.runtime / 60)}h</p>
                  <p>{Math.floor(getDetail?.data?.runtime % 60)}m</p>
                </div>
                <p className="text-sm w-full h-fit">
                  {getDetail?.data?.overview}
                </p>
              </div>
            </div>
          </div>

          <div className=" bottom-0 h-1/5 w-full backdrop-blur">
            <div className="w-full h-full">
              <div className="flex gap-3 overflow-auto">
                {listOfVideos.map((trailer) => {
                  return (
                    <iframe
                      key={trailer.id}
                      className=""
                      src={getTrailer(`${trailer.key}`)}
                      allowFullScreen
                    ></iframe>
                  );
                })}
              </div>
            </div>
          </div>
          <h1 className="text-left pl-3 text-xl font-bold py-3">Cash</h1>
          <div className="w-full h-full flex overflow-x-auto gap-3">
            {getCredits.map((cash) => {
              return (
                <div
                  key={cash.cash_id}
                  className=" h-1/4 rounded-xl w-1/4 md:w-1/4 xl:w-1/6 flex-shrink-0 relative flex items-center text-center justify-center"
                >
                  <img
                    className="absolute h-full w-full object-cover "
                    src={getPoster(cash.profile_path)}
                  ></img>
                  <h1 className="absolute text-xs bottom-3">
                    {cash.original_name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
