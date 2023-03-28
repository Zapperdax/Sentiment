import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

const initialState = [];

export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async (category) => {
    try {
      const response = await api.get(`song/${category}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const allSongs = (state) => state.songs;
export default songSlice.reducer;
