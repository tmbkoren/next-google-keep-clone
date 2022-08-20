import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

darkTheme = responsiveFontSizes(darkTheme);
lightTheme = responsiveFontSizes(lightTheme);

console.log(darkTheme);
console.log(lightTheme);

export const theme_dark = darkTheme;
export const theme_light = lightTheme;
