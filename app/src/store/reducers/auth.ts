import { createSlice } from '@reduxjs/toolkit';

export interface IAuthStoreReducer {
  count: number;
}

export const initialState: IAuthStoreReducer = {
  count: 0
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  }
});

export const { } = authSlice.actions;

export default authSlice.reducer;
