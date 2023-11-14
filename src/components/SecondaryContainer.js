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
    <div className="bg-black">


{/* to move on top of videoBackground component */}
<div className='mt-0 md:-mt-60 pl-2 md:pl-0 relative z-20'>
<MovieList rowId="1" title={"Now Playing"} movies={movies}/>
<MovieList rowId="2" title={"Popular Movies"} movies={popularMovies}/>
<MovieList rowId="3" title={"Trending Movies"} movies={trendingMovies}/>
<MovieList rowId="4" title={"Upcoming TV Shows"} movies={AiringTodayTvShow}/>
<MovieList rowId="5" title={"New Releases"} movies={upcomingMovies}/>
<MovieList rowId="6" title={"On Air TV shows"} movies={onAirTvShow}/>
<MovieList rowId="7" title={"Popular TV shows"} movies={popularTvShow}/>
<MovieList rowId="8" title={"Top Rated TV shows"} movies={topRatedTvShow}/>
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