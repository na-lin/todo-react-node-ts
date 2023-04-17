import { createTheme, ThemeOptions } from '@mui/material';

export const customDarkTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#bbf7d0',
      main: '#06b6d4',
      dark: '#15803d',
    },
    text: {
      primary: '#fff',
    },
    background: {
      paper: '#4b5563', // slate 400
      default: '#334155', // slate 700
    },
  },
});
