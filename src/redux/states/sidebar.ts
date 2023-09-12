import { createSlice } from '@reduxjs/toolkit';

interface OpenState {
  open: boolean;
}

const initialState: OpenState = {
  open: false,
};

const openSlice = createSlice({
  name: 'open',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleOpen } = openSlice.actions;

export default openSlice.reducer;
