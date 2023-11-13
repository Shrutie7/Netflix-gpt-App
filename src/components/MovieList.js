import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

const MovieList = ({ title, movies,rowId }) => {

  const ref = useRef();
  const imgref = useRef();

  const slideLeft = () => {
    var slider = document.getElementById('slider'+rowId);
    slider.scrollLeft = slider.scrollLeft - 500 ;

    
  };
  const slideRight = () => {

    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500 ;
  
  };
  return (
    <>
      <h1 className="text-xl font-bold p-4 text-white">{title}</h1>
     <div className="relative flex items-center w-screen group" ref={ref}>
        <MdChevronLeft size={40} onClick={slideLeft} className="bg-white left-0 rounded-full opacity-20 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
          <div id={"slider"+rowId} 
          className="w-full h-full overflow-x-hidden whitespace-nowrap scroll-smooth  relative">
          {movies?.map((movie,id) => (
            
              <MovieCard key={movie.id} movie={movie} id={movie.id} />
            
          ))}
          </div>
    <MdChevronRight size={40} onClick={slideRight} className="bg-white right-0 rounded-full opacity-20 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        </div>
    </>
  );
};

export default MovieList;
