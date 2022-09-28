import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  board: [],
};

export const fetchBoard = createAsyncThunk(
  "fetch/board",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3010/math");
      const data = res.json()
     return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const motherBoard = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default motherBoard.reducer;
