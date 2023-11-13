import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    // action to show and hide gpt search view
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      // extract from action
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGptMovieResults: (state, action) => {
      state.movieResults = [] ; 
      state.movieNames = [];
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults,removeGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
