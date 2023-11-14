// put all movies data in movieSlice

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    trailerVideo:null,
    popularMovie: null,
    trendingMovie:null,
    UpcomingMovie:null,
    AiringTodayTvShow:null,
    onAirTvShow:null,
    popularTvShow:null,
    topRatedTvShow:null,
    individualTrailerVideo:null,
    similarMovies:null,
    moreInfo:null
  },
  reducers: {
    addNowPlayingmovie: (state, action) => {
      //inside object {} in key nowPlayingmovies put action.payload in it
      state.nowPlayingmovies = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;

    },   
     addPopularMovie:(state,action)=>{
      state.popularMovie=action.payload;
    },
    addTrendingMovie:(state,action)=>{
      state.trendingMovie=action.payload;

  },
  addUpcomingMovie:(state,action)=>{
    state.UpcomingMovie = action.payload;

  },
  addAiringTodayTvShow:(state,action)=>{
    state.AiringTodayTvShow = action.payload;
},
addOnAirTvShow:(state,action)=>{
  state.onAirTvShow = action.payload;
  },
  addPopularTvShow:(state,action)=>{
    state.popularTvShow=action.payload;
  },
  addTopRatedTvShow:(state,action)=>{
state.topRatedTvShow = action.payload;
  },
  addIndividualTrailerVideo:(state,action)=>{
    state.individualTrailerVideo = action.payload;

},
addSimilarMovies:(state,action)=>{
  state.similarMovies= action.payload;
},
addMoreInfo:(state,action)=>{
  state.moreInfo= action.payload;
}
  }
});

export const { addNowPlayingmovie,addTrailerVideo,addPopularMovie,addTrendingMovie,addUpcomingMovie,addAiringTodayTvShow,addOnAirTvShow,addPopularTvShow,addTopRatedTvShow,addIndividualTrailerVideo,addSimilarMovies,addMoreInfo } = movieSlice.actions;
export default movieSlice.reducer;
