import { createSlice } from '@reduxjs/toolkit';
import { userData } from '@/models/users/user.model';
import { Roles } from '@/models/roles/roles';
import { clearLocalStorage, persistLocalStorage } from '@/utilities/genLocalStorage';

export const EmptyUserState: userData = {
    idUser: 0,
    username: '',
    idClub: 0,
    rol: Roles.invitado
};

export const userKey = 'user';

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            const {idUser, username, idClub, rol} = action.payload;
            state.idUser = idUser;
            state.username = username;
            state.idClub = idClub;
            state.rol = rol;
            persistLocalStorage<userData>(userKey, action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload};
            persistLocalStorage<userData>(userKey, result);
            return result;
        },
        resetUser: () => {
            clearLocalStorage(userKey);
            return EmptyUserState;
        }
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;