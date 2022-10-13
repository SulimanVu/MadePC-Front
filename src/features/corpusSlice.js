import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from '/serverUrl.js';
const initialState = {
  corpus: [],
  loader: false,
};

export const getCorpus = createAsyncThunk("corpus/get", async (_, thunkAPI) => {
  try {
    const res = await fetch(`${serverUrl}/corpus`);
    const corpus = await res.json();
    return corpus;
  } catch (e) {
    thunkAPI.rejectWithValue(e);
  }
});

const corpusSlice = createSlice({
  name: "corpus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCorpus.fulfilled, (state, action) => {
      state.corpus = action.payload;
      state.loader = false;
    });
  },
});

export default corpusSlice.reducer;
