import { userData } from "@/models/users/user.model";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from '@/redux/states/user'
export interface dataStore {
    user: userData
}

export const store = configureStore({
    reducer: {
        user: userSliceReducer
    }
});