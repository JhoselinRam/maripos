import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@renderer/theme/theme';
import languageReducer from '@renderer/language/language';

//Redux store to manage the whole app state
const store = configureStore({
  reducer: {
    theme: themeReducer,
    languge: languageReducer
  }
});

//-------------------------------------------------
//-------------------------------------------------

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
