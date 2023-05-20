import { createSlice } from '@reduxjs/toolkit';

//Reductor slice used to manage the app 'theme' state
const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setTheme(_state, action) {
      return action.payload;
    }
  }
});

const { actions, reducer } = themeSlice;

//-------------------------------------------------
//-------------------------------------------------

export const { setTheme } = actions;
export default reducer;
