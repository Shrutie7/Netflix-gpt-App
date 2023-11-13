
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingmovie } from "../utils/movieSlice";

// create custom hook which is just a normal js function that just fetches now playing movies from tmdb api

export const useNowPlayingMovies = () =>{ 
    // FETCH Data from TMDB API and update store
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingmovies)

   
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
    
    //  convert/fulfill promise with await and change to readable stream with data.json()
      const jsondata = await data.json();
      //add all nowplaying movies to store
      dispatch(addNowPlayingmovie(jsondata.results))
    };
    
    // API will be called 2 times always/useEffect will be called 2 times ,bcoz of react.strictmode in index.js when we do cra it wrapped app in strictmode.... StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).
    // api calls happen twice because react does EXTRA RENDERING OF COMPOENENTS TO CHECK FOR INCONSISITENCIES BETWEEN OUR CALLS HAPPENS ONLY IN DEVELOPMENT MODE throws error IF ANY INCONSISTENCIES HAPPEN IN RENDERING CYCLE
    // only in local project twice api call is made when we do build for production api call  will not happen twice 
    // if we remove react.strictmode from index.js then api call will happen only once
    useEffect(() => {
       // if nowPlayingMovies already exists in store dont make api call only make api call when nowPlayingMovies is null


!nowPlayingMovies && getNowPlayingMovies();
     
   
    }, []);
     
}


