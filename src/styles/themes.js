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

export default [darkTheme, lightTheme];
