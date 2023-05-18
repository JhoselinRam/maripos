import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@renderer/theme/theme';

const store = configureStore({
  reducer: {
    theme: themeReducer
  }
});

export default store;
