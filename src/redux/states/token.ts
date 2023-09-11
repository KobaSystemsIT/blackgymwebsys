import { createSlice } from '@reduxjs/toolkit';
import { Token } from '../../models/token/token';
import { clearLocalStorage, persistLocalStorage } from '@/utilities';

const initialState: Token = {
  token: '',
  dateRestart: '',
};
export const TokenID = 'token';

const openSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') as string) : initialState,
  reducers: {
    saveToken: (state, action) => {
      persistLocalStorage<Token>(TokenID, action.payload);
      return action.payload;
    },
    deleteToken: () => {
      clearLocalStorage(TokenID);
      return initialState;
    }
  }
});

export const { saveToken, deleteToken } = openSlice.actions;

export default openSlice.reducer;
