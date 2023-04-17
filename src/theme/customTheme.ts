import { createTheme, ThemeOptions } from '@mui/material';

export const customDarkTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      light: '#bbf7d0',
      main: '#22c55e',
      dark: '#15803d',
    },
    background: {
      paper: '#fde68a', // Amber 500
      default: '#fef3c7', // Amber 200
    },
  },
});
