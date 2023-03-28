import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

const initialState = [];

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (category) => {
    try {
      const response = await api.get(`video/${category}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const allVideos = (state) => state.videos;
export default videoSlice.reducer;
