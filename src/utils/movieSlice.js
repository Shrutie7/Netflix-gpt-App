// put all movies data in movieSlice

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    trailerVideo:null
  },
  reducers: {
    addNowPlayingmovie: (state, action) => {
      //inside object {} in key nowPlayingmovies put action.payload in it
      state.nowPlayingmovies = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;

    }
  },
});

export const { addNowPlayingmovie,addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
