import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
powerUnits: [],
  load: false,
};




export const fetchpowerUnits = createAsyncThunk(
  "fetch/powerUnits",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3010/powerunit");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const powerUnitsSclice = createSlice({
  name: "vpowerUnits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchpowerUnits.fulfilled, (state, action) => {
        state.powerUnits = action.payload;
        state.load = false;
      })
      .addCase(fetchpowerUnits.pending, (state, action) => {
        state.load = true;
      })
      .addCase(fetchpowerUnits.rejected, (state, action) => {
        state.load = true;
      })
      
  },
});


export default powerUnitsSclice.reducer;