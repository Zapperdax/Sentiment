import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import quoteReducer from "../features/quote/quoteSlice";
import songReducer from "../features/song/songSlice";
import videoReducer from "../features/video/videoSlice";
import blogReducer from "../features/blog/blogSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    movies: movieReducer,
    quotes: quoteReducer,
    songs: songReducer,
    videos: videoReducer,
    blog: blogReducer,
  },
});
