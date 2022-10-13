import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from '/serverUrl.js';
const initialState = {
  videoCards: [],
  load: false,
};

export const fetchvideoCards = createAsyncThunk(
  "fetch/videocards",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/videocards`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const videoCardsSclice = createSlice({
  name: "videocards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchvideoCards.fulfilled, (state, action) => {
        state.videoCards = action.payload;
        state.load = false;
      })
      .addCase(fetchvideoCards.pending, (state, action) => {
        state.load = true;
      })
      .addCase(fetchvideoCards.rejected, (state, action) => {
        state.load = true;
      });
  },
});

export default videoCardsSclice.reducer;
