import React, { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import HoverCard from "./HoverCard";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { addIndividualTrailerVideo } from "../utils/movieSlice";

const MovieCard = ({ movie, id }) => {
  if (!movie?.backdrop_path) return null;

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={IMG_CDN_URL + movie?.backdrop_path}
        alt="movie card"
        className="w-full h-auto block"
      />

      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs font-normal md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title
            ? movie?.title.length < 28
              ? movie?.title
              : movie?.title?.toString()?.substring(0, 28) + "..."
            : movie?.original_name}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
