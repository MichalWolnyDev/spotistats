import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface SpotifyState {
    products: Array<AppThunk>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: SpotifyState = {
    products: [],
    status: 'idle',
};

// export const fetchProducts = createAsyncThunk('posts/fetchProducts', async () => {
//     const response = await client.get('/fakeApi/posts')
//     return response.data
//   })