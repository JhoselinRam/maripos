import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setTheme(state, action) {
      if (state === action.payload) return;
      return action.payload;
    }
  }
});

const { actions, reducer } = themeSlice;

export const { setTheme } = actions;
export default reducer;
