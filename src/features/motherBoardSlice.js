import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from '../serverUrl.js';
const initialState = {
  board: [],
  loader: false,
};

export const fetchBoard = createAsyncThunk(
  "fetch/board",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/math`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const motherBoard = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      ////////////////FETCH-BOARD///////////////
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.board = action.payload;
        state.loader = false;
      })
      .addCase(fetchBoard.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(fetchBoard.rejected, (state, action) => {
        state.loader = false;
      });
  },
});

export default motherBoard.reducer;
