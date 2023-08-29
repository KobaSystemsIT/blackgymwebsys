import { configureStore } from '@reduxjs/toolkit';
import { OpenState, UserInfo } from '../models';
import userSliceReducer from './states/user';
import  clubSliceReducer  from './states/club';
import { Clubes } from '@/models/Clubes';
import openReducer from './states/sidebar'

export interface AppStore {
  user: UserInfo;
  club: Clubes;
  open: OpenState;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
    club: clubSliceReducer,
    open: openReducer,
  }
});
