//This file is in charge to set the language reducer slice to be used in the redux store
//Every component defines its own localized text, so navigate to the corresponding component
//folder to get or modify the available translations.

import { createSlice } from '@reduxjs/toolkit';

//Reductor slice used to manage the app 'language' state
const languageSlice = createSlice({
  name: 'language',
  initialState: import.meta.env.RENDERER_VITE_FALLBACK_LANGUAGE,
  reducers: {
    setLanguage(_state, action) {
      return action.payload;
    }
  }
});

const { actions, reducer } = languageSlice;

//-------------------------------------------------
//-------------------------------------------------

export const { setLanguage } = actions;
export default reducer;
