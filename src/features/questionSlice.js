import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from '/serverUrl.js';
const initialState = {
  question: [],
  loadQuestion: false,
};

export const fetchQuestion = createAsyncThunk(
  "question/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/question`);
      const data = await res.json();

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestion.fulfilled, (state, action) => {
        state.question = action.payload;
        state.loadQuestion = false;
      })
      .addCase(fetchQuestion.pending, (state, action) => {
        state.loadQuestion = true;
      });
  },
});

export default questionSlice.reducer;
