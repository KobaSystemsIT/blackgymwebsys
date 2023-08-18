import { UserData } from "@/models/users";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState:UserData = {
    idUser: 0,
    username: "",
    password: "",
    idClub: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            return action.payload;
        },

        updateUser: (state, action) => {
            return { ...state, ...action.payload}
        },

        resetUser: () => {
            return EmptyUserState;
        }
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;