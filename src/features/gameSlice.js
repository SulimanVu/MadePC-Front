import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from '../serverUrl.js';

const initialState = {
    games: []
}


export const fetchGames = createAsyncThunk("game/fetchGames", async(_, thynkAPI) => {
   try{
    const res = await fetch(`${serverUrl}/game`);
    const data = await res.json();
    return data;
   } catch(error) {
    thynkAPI.rejectWithValue(error)
   }
})


const gameSlice = createSlice({
    name:"game",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGames.fulfilled, (state, action) => {
            state.games = action.payload
        })
    }
})

export default gameSlice.reducer