import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'system',
  reducers: {
    set(state, action) {
      if (state === action.payload) return;
      return action.payload;
    }
  }
});

const { actions, reducer } = themeSlice;

export const { set } = actions;
export default reducer;
