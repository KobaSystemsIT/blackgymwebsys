import { UserData } from "@/models/users";
import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from "./states/user";

export interface AppStore{
    user: UserData;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSliceReducer
    }
})