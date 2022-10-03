import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    games: []
}


export const fetchGames = createAsyncThunk("game/fetchGames", async(_, thynkAPI) => {
   try{
    const res = await fetch("http://localhost:3010/game");
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