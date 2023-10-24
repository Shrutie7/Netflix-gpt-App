import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import leftarr from "../icons/left-chevron.png";
import rightarr from "../icons/right-chevron.png";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  const [startingpoint, setstartingpoint] = useState(0);
  const [endingpoint, setendingpoint] = useState(1);
  const ref = useRef();
  const imgref = useRef();

  const leftarrhandler = () => {

    ref.current.scrollLeft =
      ref.current.scrollLeft - (imgref.current.clientWidth + 28);

      let distance =    ref.current.scrollLeft - (imgref.current.clientWidth + 28);
      setstartingpoint(distance);
  };
  const rightarrhandler = () => {

    ref.current.scrollLeft =
      ref.current.scrollLeft + (imgref.current.clientWidth + 28);

      let distance = ref.current.scrollLeft + (imgref.current.clientWidth + 28);
      setstartingpoint(distance);
      setendingpoint(imgref.current.scrollWidth - ref.current.scrollLeft);
  };
  return (
    <div className="px-3 py-3">
      <h1 className="text-xl font-semibold py-4 px-20 text-white">{title}</h1>
      <div className="flex">
      <div className="mt-[10%] ml-4">
      <img src={leftarr} className="h-7 w-20 cursor-pointer" onClick={() => leftarrhandler()} alt="leftarrow" />
      </div>
     
      <div className="flex overflow-hidden" ref={ref}>
        <div className="flex">
          {movies?.map((movie) => (
            <div ref={imgref}>
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-[10%] ml-3"> 

      <img
        src={rightarr}
        alt="rightarrow"
        className="h-7 w-20 cursor-pointer"
        onClick={() => rightarrhandler()}
      />
      </div>

      </div>
    </div>
  );
};

export default MovieList;
