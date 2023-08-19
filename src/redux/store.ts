import { configureStore } from '@reduxjs/toolkit';
import { UserData } from '@/models/user';
import userSliceReducer from './states/user';

export interface AppStore {
  user: UserData;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer
  }
});
