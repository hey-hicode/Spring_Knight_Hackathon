
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';

export const fetchProducts = createAsyncThunk('Products/fetchProduct', async () => {
    const response = await api.fetchProduct()
    return response;
});


const allProductsSlice = createSlice({
    name: 'Products',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // Define any specific actions related to Category (if needed)
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

// export const { } = postSlice.actions;
export default allProductsSlice.reducer;