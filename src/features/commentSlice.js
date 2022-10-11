import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  loadComment: false,
};

export const fetchComments = createAsyncThunk(
  "comments/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3010/comment");
      const comment = await res.json();
      return comment;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const addComments = createAsyncThunk(
  "comments/post",
  async ({ comm, id }, thunkAPI) => {
    const res = await fetch("http://localhost:3010/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: comm, user: id }),
    });
    return res.json();
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loadComment = false;
      })
      .addCase(fetchComments.pending, (state, action) => {
        state.loadComment = true;
      })
      .addCase(addComments.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.loadComment = false;
      });
  },
});

export default commentSlice.reducer;
