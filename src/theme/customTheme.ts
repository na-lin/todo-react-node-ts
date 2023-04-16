import { createTheme, ThemeOptions } from '@mui/material';

export const customDarkTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#bbf7d0',
      main: '#22c55e',
      dark: '#15803d',
    },
    background: {
      paper: '#334155',
      default: '#0f172a',
    },
  },
});
