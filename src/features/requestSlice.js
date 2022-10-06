import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    request: [],
    loading: false
}

export const fetchRequests = createAsyncThunk(
    'fetch/request',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3010/requests');
            const data = res.json();

            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

export const addRequest = createAsyncThunk(
    'add/request',
    async ({ name, number, email, comment, basket }, thunkAPI) => {
        console.log(basket);
        try {
            const res = await fetch('http://localhost:3010/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, number: number, email: email, comment: comment, comp: basket })
            })

            const data = await res.json();
            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRequests.fulfilled, (state, action) => {
                state.request = action.payload
                state.loading = false
            })
            .addCase(fetchRequests.pending, (state, action) => {
                state.loading = true
            })
            .addCase(addRequest.fulfilled, (state, action) => {
                state.request.push(action.payload)
                state.loading = false
            })
            .addCase(addRequest.pending, (state, action) => {
                state.loading = true
            })
    }
})

export default requestSlice.reducer