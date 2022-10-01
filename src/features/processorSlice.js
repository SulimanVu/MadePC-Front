import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  processor: [],
  loadProcessor: false,
};

export const fetchProcessors = createAsyncThunk(
  "processor/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3010/processors");
      const data = await res.json();

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const processorSlice = createSlice({
  name: "processor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProcessors.fulfilled, (state, action) => {
        state.processor = action.payload;
        state.loadProcessor = false;
      })
      .addCase(fetchProcessors.pending, (state, action) => {
        state.loadProcessor = true;
      });
  },
});

export default processorSlice.reducer;
