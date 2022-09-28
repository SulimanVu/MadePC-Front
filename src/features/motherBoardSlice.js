import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [],
  loader: false
};

export const fetchBoard = createAsyncThunk(
  "fetch/board",
  async (_, thunkAPI) => {
    try {
      const data = await fetch("http://localhost:3010/math");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const motherBoard = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( fetchBoard.fulfilled, (state, action)=>{
        state.board = action.payload
        state.loader = false
    });
  },
});

export default motherBoard.reducer;
