import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '@/models/user';
import { clearLocalStorage, persistLocalStorage } from '@/utilities';

export const EmptyUserState: UserData = {
  idUser: 0,
  username: '',
  password: '',
  idClub:0,
  userType:'',
  token: ''
};

export const Token = 'username';

export const userSlice = createSlice({
  name: 'username',
  initialState: localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username') as string) : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserData>(Token, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserData>(Token, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(Token);
      return EmptyUserState;
    }
  }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;