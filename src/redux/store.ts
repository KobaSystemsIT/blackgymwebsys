import { configureStore } from '@reduxjs/toolkit';
import { OpenState, UserInfo } from '../models';
import userSliceReducer from './states/user';
import  clubSliceReducer  from './states/club';
import { Clubes } from '@/models/clubes';
import openReducer from './states/token'
import { Token } from '@/models/token/token';

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
