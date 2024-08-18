import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        movies: movieReducer
    },
})