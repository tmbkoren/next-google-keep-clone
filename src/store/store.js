import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../store/slices/dataSlice';
import settingsReducer from '../store/slices/settingsSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    settings: settingsReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
