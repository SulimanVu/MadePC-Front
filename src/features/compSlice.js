import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from '/serverUrl.js';
const initialState = {
  comp: [],
  loader: false,
};

export const fetchComp = createAsyncThunk("fetch/comp", async (_, thunkAPI) => {
  try {
    const res = await fetch(`${serverUrl}/comps`);
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateComp = createAsyncThunk(
  "update/comp",
  async (
    {
      id,
      name,
      price,
      image,
      ram,
      videocard,
      hardcard,
      ssd,
      processor,
      corpus,
      cooler,
      math,
    },
    thunkAPI
  ) => {
    try {
      const res = await fetch(`${serverUrl}/comp/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          image,
          ram,
          videocard,
          hardcard,
          ssd,
          processor,
          corpus,
          cooler,
          math,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComp = createAsyncThunk(
  "add/comp",
  async (
    {
      name,
      price,
      image,
      ram,
      videocard,
      hardcard,
      ssd,
      processor,
      corpus,
      cooler,
      math,
    },
    thunkAPI
  ) => {
    try {
      const res = await fetch(`${serverUrl}/comp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          image,
          ram,
          videocard,
          hardcard,
          ssd,
          processor,
          corpus,
          cooler,
          math,
        }),
      });
      const data = res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const countPlus = createAsyncThunk(
//   'count/plus',
//   async ({ itemId, count }, thunkAPI) => {
//     try {
//       const res = await fetch(`/countPlus/${itemId}`, {
//         method: "PATCH",
//         headers: {
//           'Content-Type': "application/json"
//         },
//         body: JSON.stringify({ count: count + 1 })
//       })

//       const data = await res.json()
//       return data;
//     } catch (e) {
//       thunkAPI.rejectWithValue(e)
//     }
//   }
// )

const comp = createSlice({
  name: "comp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      ////////////////FETCH-COMP///////////////
      .addCase(fetchComp.fulfilled, (state, action) => {
        state.comp = action.payload;
        state.loader = false;
      })
      .addCase(fetchComp.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(fetchComp.rejected, (state, action) => {
        state.loader = false;
      })
      ///////////////UPDATE-COMP//////////////
      .addCase(updateComp.fulfilled, (state, action) => {
        state.comp = action.payload;
        state.loader = false;
      })
      .addCase(updateComp.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(updateComp.rejected, (state, action) => {
        state.loader = false;
      })
      ///////////////ADD-COMP//////////////
      .addCase(addComp.fulfilled, (state, action) => {
        state.comp.push(action.payload);
        state.loader = false;
      })
      .addCase(addComp.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(addComp.rejected, (state, action) => {
        state.loader = false;
      })
      // .addCase(countPlus.fulfilled, (state, action) => {
      //   state.comp = state.comp.map((item) => {
      //     if (item._id === action.payload._id) {
      //      return item.count += 1
      //     }
      //     return item;
      //   })
      // })
  },
});

export default comp.reducer;
