import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constant'
import { useSelector } from 'react-redux';
import HoverCard from './HoverCard';
import useMovieTrailer from '../hooks/useMovieTrailer';

const MovieCard = ({movie,id}) => {



const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

// useMovieTrailer(movie?.id);

  const [onhover,setonhover]=useState(false);

  const handlehover= ()=>{
    setonhover(!onhover)

  }
  if(!movie?.backdrop_path) return null;
  {console.log(movie)}
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img src={IMG_CDN_URL+movie?.backdrop_path} alt="movie card"  className='w-full h-auto block'/>


    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white' onMouseOver={()=>handlehover()}>
        <p className='white-space-normal text-sm md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {movie?.title}
        </p>
        </div>

     
    </div>
  )
}

export default MovieCard