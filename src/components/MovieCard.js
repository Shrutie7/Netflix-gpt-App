import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster_path}) => {

  return (
    <div  className="moviecardmain">
    <img src={IMG_CDN_URL+poster_path} alt="movie card" className='rounded-md'/>

    </div>
  )
}

export default MovieCard