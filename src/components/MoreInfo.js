import React, { useEffect } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constant";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMoreInfo, addSimilarMovies } from "../utils/movieSlice";
import MovieCard from "./MovieCard";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { Modal } from "react-bootstrap";
const MoreInfo = ({ id, setshow }) => {
  const dispatch = useDispatch();
  const movId = id;
  console.log(movId);
  useMovieTrailer(movId);

  const getMovieInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movId + "?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addMoreInfo(json));

    console.log(json);
  };
  useEffect(() => {
    getMovieInfo();
  }, []);

  const getSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movId +
        "/similar?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    const similarMov = json.results;
    dispatch(addSimilarMovies(similarMov));
  };
  useEffect(() => {
    getSimilarMovies();
  }, []);

  const trailerInfo = useSelector((store) => store.movies?.trailerVideo);
  const info = useSelector((store) => store.movies?.moreInfo);
  const infoSimilarMovies = useSelector((store) => store.movies?.similarMovies);
  console.log(info);
  console.log(infoSimilarMovies);
  console.log(trailerInfo);
  if (!info) return;
  const {
    poster_path,
    budget,
    genres,
    homepage,
    original_title,
    overview,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    tagline,
    vote_average,
  } = info;
  return (
    <div className="main">
      <div className="absolute bg-gradient-to-r from-black font-semibold text-white">
        <button className="w-10 bg-red-600" onClick={() => setshow(false)}>
          close
        </button>
        <div className="flex justify-start ">
          <ul>
            <div className="flex justify-between">
              <li className="pt-4 pl-2">Official Trailer</li>
            </div>

            <div className="flex">
              <li>
                <iframe
                  className="w-[900px] ml-[100px] aspect-video "
                  src={
                    "https://www.youtube.com/embed/" +
                    trailerInfo?.key +
                    "?&autoplay=1&mute=0&loop=1&rel=0&amp&controls=0"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </li>
            </div>

            <li className="p-2">Title: {original_title}</li>
            <li className="p-2">
              Overview: {overview}
            </li>
            <li className="p-2">
              Geners: {genres?.map((mov) => mov.name).join(",")}
            </li>
            <li className="p-2">Budget: {budget / 1000000} Million Dollars</li>

            <li className="p-2">
              MovieSite: <a href={homepage}>{homepage}</a>
            </li>

            <li className="p-2">
              Production Companies:{" "}
              {production_companies?.map((e) => e.name).join(",")}
            </li>
            <li className="p-2">
              Production Countries:{" "}
              {production_countries?.map((e) => e.name).join(",")}
            </li>
            <li className="p-2">Release Date: {release_date}</li>
            <li className="p-2">
              Revenue: {revenue / 1000000} Million Dollars
            </li>
            <li className="p-2">Runtime: {runtime} minutes</li>
            <li className="p-2">
              Spoken Languages:{" "}
              {spoken_languages?.map((e) => e.english_name).join(",")}
            </li>
            <li className="p-2">Tagline: {tagline}</li>
            <li className="p-2">Rating: {vote_average}⭐ out of 10</li>
          </ul>
        </div>

        {/* <MovieList movList={infoSimilarMovies} title="Similar Movies" /> */}

        <h1 className="text-white ml-3 text-xl">Similar Movies</h1>
        <div className="flex  overflow-x-scroll w-screen">
          {infoSimilarMovies?.map((mov) => (
            <Link to={"/browse/moreinfotwin/" + mov.id}>
              {/* <a href={"/browse/" + mov.id}> */}
              <MovieCard movie={mov} />
            </Link>
            // </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
