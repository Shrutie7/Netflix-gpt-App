import React, { useEffect, useState } from "react";
import Header from "./Header";
import {useNowPlayingMovies} from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  // call custom hook to fetch nowplayingmovies
useNowPlayingMovies();
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
