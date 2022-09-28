const initialState = {
  board: [],
};

export const fetchBoard = createAsyncThunk(
  "fetch/board",
  async (_, thunkAPI) => {
    try {
      const data = await fetch("http://localhost:3010/math");
      res.json(data);
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
