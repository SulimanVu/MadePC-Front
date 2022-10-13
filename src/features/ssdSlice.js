import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from '../serverUrl.js';
const initialState = {
  ssd: [],
  loader: false,
};

export const getSSD = createAsyncThunk("SSD/get", async (data, thunkAPI) => {
  try {
    const res = await fetch(`${serverUrl}/SSD`);
    const SSD = await res.json();
    return SSD;
  } catch (e) {
    thunkAPI.rejectWithValue(e);
  }
});

const ssdSlice = createSlice({
  name: "corpus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSSD.fulfilled, (state, action) => {
      state.ssd = action.payload;
      state.loader = false;
    });
  },
});

export default ssdSlice.reducer;
