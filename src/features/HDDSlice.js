import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  HDD: [],
  loading: false,
  error: null,
};

export const fetchHDD = createAsyncThunk("HDD/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3010/HDD");
    const data = await res.json();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

const HDDSlice = createSlice({
  name: "HDD",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHDD.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHDD.fulfilled, (state, action) => {
        state.HDD = action.payload;
        state.loading = false;
      })
      .addCase(fetchHDD.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default HDDSlice.reducer;
