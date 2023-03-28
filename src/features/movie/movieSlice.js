import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

const initialState = [];

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (category) => {
    try {
      const response = await api.get(`movie/${category}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const allMovies = (state) => state.movies;
export default movieSlice.reducer;
