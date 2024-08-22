import { configureStore } from "@reduxjs/toolkit";
import {courseslice} from './slices/courseslice'
import { likedslice } from "./slices/likedslice";

export const store=configureStore({

    reducer:{
        course:courseslice.reducer,
        like:likedslice.reducer
    }

})