import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@renderer/theme/theme';

//Redux store to manage the whole app state
const store = configureStore({
  reducer: {
    theme: themeReducer
  }
});

//-------------------------------------------------
//-------------------------------------------------

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
