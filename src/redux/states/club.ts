import { createSlice } from '@reduxjs/toolkit';
import { Clubes } from '@/models/clubes';
import { clearLocalStorage, persistLocalStorage } from '@/utilities';

export const EmptyClubState: Clubes = {
    idClub: 0,
    nameClub: '',
    addressClub: ''
};

export const clubKey = 'club';

export const clubSlice = createSlice({
    name: 'club',
    initialState: localStorage.getItem('club') ? JSON.parse(localStorage.getItem('club') as string) : EmptyClubState,
    reducers: {
        addClub: (state, action) => {
            persistLocalStorage<Clubes>(clubKey, action.payload);
            return action.payload;
        },
        removeClub: () => {
            clearLocalStorage(clubKey);
            return EmptyClubState;
        }
    }
});

export const { addClub, removeClub } = clubSlice.actions;

export default clubSlice.reducer;