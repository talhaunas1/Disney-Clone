import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { configstore } from "firebase-tools/lib/configstore";
import userReducer from '../features/user/userSlice'

export default configureStore({
reducer:{
    user: userReducer //question
 },
middleware: getDefaultMiddleware({
    serializableCheck: false,
})
})