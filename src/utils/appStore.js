import { configureStore } from "@reduxjs/toolkit";
import userSlicereducer from "./userSlice";
import movieSlicereducer from "./movieSlice";

const appStore = configureStore({
 reducer:{
    user:userSlicereducer,
    movies:movieSlicereducer
 }
})

export default appStore;