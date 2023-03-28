/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

const initialState = [];

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async (category) => {
    try {
      const response = await api.get(`quote/${category}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const allQuotes = (state) => state.quotes;
export default quoteSlice.reducer;
