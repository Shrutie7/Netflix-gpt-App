import { configureStore } from "@reduxjs/toolkit";
import userSlicereducer from "./userSlice";

const appStore = configureStore({
 reducer:{
    user:userSlicereducer
 }
})

export default appStore;