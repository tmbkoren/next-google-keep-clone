import { createSlice } from '@reduxjs/toolkit';
import { theme_dark, theme_light } from '../../styles/themes';

console.log(theme_dark, theme_light);

const initialState = {
  isDarkTheme: true,
  theme: theme_dark,
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
        state.isDarkTheme = false;
        state.theme = theme_light;
      } else {
        state.isDarkTheme = true;
        state.theme = theme_dark;
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
