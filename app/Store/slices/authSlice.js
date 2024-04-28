import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginInvestor, loginStartup } from '../api'; // Import specific API functions

// Async thunk for investor login
export const loginInvestorThunk = createAsyncThunk(
  'auth/loginInvestor',
  async (userData) => {
    const response = await loginInvestor(userData);
    return response;
  }
);

// Async thunk for startup login
export const loginStartupThunk = createAsyncThunk(
  'auth/loginStartup',
  async (userData) => {
    const response = await loginStartup(userData);
    return response;
  }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        // Here you can add reducers for actions like logging out
        logout(state) {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Handle investor login
            .addCase(loginInvestorThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginInvestorThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginInvestorThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            // Handle startup login
            .addCase(loginStartupThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginStartupThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginStartupThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
