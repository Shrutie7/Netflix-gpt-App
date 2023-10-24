import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies.nowPlayingmovies);

  const popularMovies = useSelector((store)=>store.movies.popularMovie);

  const trendingMovies = useSelector((store)=>store.movies.trendingMovie);

  const upcomingMovies = useSelector((store)=>store.movies.UpcomingMovie);

  const AiringTodayTvShow = useSelector((store)=>store.movies.AiringTodayTvShow);

  const onAirTvShow = useSelector((store)=>store.movies.onAirTvShow);

  const popularTvShow = useSelector((store)=>store.movies.popularTvShow);

  const topRatedTvShow = useSelector((store)=>store.movies.topRatedTvShow);
  return (
    <div className='w-screen bg-black'>


{/* to move on top of videoBackground component */}
<div className='-mt-60 relative z-20'>
<MovieList title={"Now Playing"} movies={movies}/>
<MovieList title={"Popular Movies"} movies={popularMovies}/>
<MovieList title={"Trending Movies"} movies={trendingMovies}/>
<MovieList title={"Upcoming TV Shows"} movies={AiringTodayTvShow}/>
<MovieList title={"New Releases"} movies={upcomingMovies}/>
<MovieList title={"On Air TV shows"} movies={onAirTvShow}/>
<MovieList title={"Popular TV shows"} movies={popularTvShow}/>
<MovieList title={"Top Rated TV shows"} movies={topRatedTvShow}/>
</div>
      {/* 
      MovieList - Popular
         MovieCard * n
      MovieList-Trending
      MovieList-Now Playing
      MovieList - Horror
      
       */}
    </div>
  )
}

export default SecondaryContainer