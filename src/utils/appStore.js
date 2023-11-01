import { configureStore } from "@reduxjs/toolkit";
import userSlicereducer from "./userSlice";
import movieSlicereducer from "./movieSlice";
import gptSlicereducer from "./gptSlice"
import ConfigSlicereducer from "./ConfigSlice";

const appStore = configureStore({
 reducer:{
    user:userSlicereducer,
    movies:movieSlicereducer,
    gpt:gptSlicereducer,
    config:ConfigSlicereducer
 }
})

export default appStore;