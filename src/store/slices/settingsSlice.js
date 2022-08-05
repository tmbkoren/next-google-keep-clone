import { createSlice } from '@reduxjs/toolkit';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const initialState = {
  isDarkTheme: true,
  theme: darkTheme,
  lang: 'en',
  langs: ['en', 'ru'],
  langIndex: 0,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.isDarkTheme) {
        state.theme = lightTheme;
        state.isDarkTheme = false;
      } else {
        state.theme = darkTheme;
        state.isDarkTheme = true;
      }
    },
    toggleLang: (state) => {
      if (state.langIndex === state.lang.length - 1) {
        state.langIndex = 0;
      } else {
        state.langIndex += 1;
      }
      state.lang = state.langs[state.langIndex];
    },
  },
});

export const { toggleTheme, toggleLang } = settingsSlice.actions;

export default settingsSlice.reducer;
