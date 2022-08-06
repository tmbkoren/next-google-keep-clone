import { createSlice } from '@reduxjs/toolkit';
import themes from '../../styles/themes';

console.log('themes: ', themes);

const initialState = {
  isDarkTheme: true,
  theme: themes[0],
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
        isDarkTheme = false;
        theme = themes[1];
      } else {
        isDarkTheme = true;
        theme = themes[0];
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
