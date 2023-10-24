import React, { useEffect, useState } from "react";
import Header from "./Header";
import {useNowPlayingMovies} from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useAiringTodayTvshow from "../hooks/useAiringTodayTvshow";
import useOnAirTvshow from "../hooks/useOnAirTvshow";
import usePopularTvShow from "../hooks/usePopularTvShow";
import useTopRatedTvShow from "../hooks/useTopRatedTvShow";

const Browse = () => {

  // call custom hook to fetch nowplayingmovies and update store 
useNowPlayingMovies();

// call custom hook to fetch popularMovies and update store 
usePopularMovies();

useTrendingMovies();

useUpcomingMovies();

useAiringTodayTvshow();

useOnAirTvshow();

usePopularTvShow();

useTopRatedTvShow();
  return (
    <>
      <Header />
      <MainContainer/>
       <SecondaryContainer/>
      {/*
      MainContainer
        - Video background
        - Video Title
      Secondary Container
        - MovieList * n 
          - cards * n     
       */}
    </>
  );
};

export default Browse;
