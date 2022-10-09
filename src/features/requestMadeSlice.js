import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  madeRequest: [],
  loading: false,
};

export const fetchMadeRequests = createAsyncThunk(
  "fetch/Maderequest",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3010/requestsMade");
      const data = res.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const addMadeRequest = createAsyncThunk(
  "add/Maderequest",
  async ({ name, number, email, comment, basket }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3010/requestMade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          number: number,
          email: email,
          comment: comment,
          comp: basket,
        }),
      });

      const data = await res.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteMadeRequest = createAsyncThunk(
  "delete/Maderequest",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3010/requestMade/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const data = await res.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const requestMadeSlice = createSlice({
  name: "requestMade",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMadeRequests.fulfilled, (state, action) => {
        state.madeRequest = action.payload;
        state.loading = false;
      })
      .addCase(fetchMadeRequests.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addMadeRequest.fulfilled, (state, action) => {
        state.madeRequest.push(action.payload);
        state.loading = false;
      })
      .addCase(addMadeRequest.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(deleteMadeRequest.fulfilled, (state, action) => {
        state.madeRequest = state.madeRequest.filter((item) => {
          return item._id !== action.payload._id;
        });
      });
  },
});

export default requestMadeSlice.reducer;
