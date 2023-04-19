import React, { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";
import { useParams } from "react-router-dom";
//useParam lay ID , nhu trong khi set Router da dat "detail:id"
const Detail = () => {
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
  useEffect(() => {
    const fetchDetailMovie = async () => {
      try {
        console.log("ABC");
        const data = await tmdb.get(`movie/${movieId}`);
        const saveData = data;
        setGetDetail(saveData);
        console.log(saveData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailMovie();

    const getUrlForVideo = async () => {
      const { data } = await tmdb.get(`movie/${movieId}/videos`);
      // console.log(data.results);
      setListOfVideos(data.results.slice(0, 3));
      console.log(listOfVideos);
    };
    getUrlForVideo();

    const getCast = async () => {
      const { data } = await tmdb.get(`movie/${movieId}/credits`);
      setGetCredits(data.cast.slice(0, 6));
      console.log(data.cast.slice(0, 6));
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
        <div className="absolute h-full w-full text-center justify-center items-center p-3">
          <img
            className="w-full h-1/2 object-cover object-center"
            src={getPoster(`${getDetail?.data?.poster_path}`)}
          ></img>
          <h1 className="text-white font-bold text-xl pb-3">
            {getDetail?.data?.original_title}
          </h1>
          <div className="flex items-center justify-center gap-3 flex-col  text-center">
            <div className="flex gap-1 items-center">
              <p className="text-black bg-yellow-400 w-fit rounded-xl px-3 py-1 font-extrabold ">
                IMDb : {Math.floor(getDetail?.data?.vote_average)}
              </p>
              <p>{Math.floor(getDetail?.data?.runtime / 60)}h</p>
              <p>{Math.floor(getDetail?.data?.runtime % 60)}m</p>
            </div>
            <p className="text-sm w-full h-fit">{getDetail?.data?.overview}</p>
          </div>
          <div className=" bottom-0 h-1/5 w-full p-3 backdrop-blur">
            <div className="w-full h-full rounded-xl">
              <div className="flex gap-3 overflow-auto rounded-xl">
                {listOfVideos.map((trailer) => {
                  return (
                    <iframe
                      key={trailer.id}
                      className="rounded-xl"
                      src={getTrailer(`${trailer.key}`)}
                      allowFullScreen
                    ></iframe>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-full p-3">
            <div className="bg-slate-400 h-1/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
