import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { configstore } from "firebase-tools/lib/configstore";
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movie/movieSlice'

export default configureStore({
reducer:{
    user: userReducer, //question
    movie: movieReducer
 },
middleware: getDefaultMiddleware({
    serializableCheck: false,
})
})