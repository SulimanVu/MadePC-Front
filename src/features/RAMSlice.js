import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  RAM: [],
  loading: false,
  error: null,
};

export const fetchRAM = createAsyncThunk(
  "RAM/fetchRAM",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3010/RAM");
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const RAMSlice = createSlice({
  name: "RAM",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRAM.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRAM.fulfilled, (state, action) => {
        state.RAM = action.payload;
        state.loading = false;
      })
      .addCase(fetchRAM.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default RAMSlice.reducer;
