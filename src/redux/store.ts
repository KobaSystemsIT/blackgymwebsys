import { Clubes } from '@/models/clubes';
import { Token } from '@/models/token/token';
import { configureStore } from '@reduxjs/toolkit';
import { UserInfo } from '../models';
import clubSliceReducer from './states/club';
import openReducer from './states/token';
import userSliceReducer from './states/user';

export interface AppStore {
  user: UserInfo;
  club: Clubes;
  token: Token;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
    club: clubSliceReducer,
    token: openReducer,
  }
}
);
