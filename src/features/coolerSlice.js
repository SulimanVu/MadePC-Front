import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cooler: [],
  loadCoolers: false,
};

export const fetchCooler = createAsyncThunk(
  "fetch/coolers",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3010/coolers");
      const data = await res.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const coolerSlice = createSlice({
  name: "cooler",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCooler.fulfilled, (state, action) => {
        state.cooler = action.payload;
        state.loadCoolers = false;
      })
      .addCase(fetchCooler.pending, (state, action) => {
        state.loadCoolers = true;
      });
  },
});

export default coolerSlice.reducer;
