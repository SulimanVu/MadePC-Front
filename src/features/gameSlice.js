import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    game:[]
};



export const fetchGame = createAsyncThunk("game/fetchGame", async(_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3010/game");
        const data = res.json()
        return data;
    } catch(error) {
        thunkAPI.rejectWithValue(error)
    }
})


 const  gameSlice = createSlice({
    name: "game",
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder
        .addCase(fetchGame.fulfilled, (state, action) => {
            state.game = action.payload
        })
    }
    
})

export default gameSlice.reducer