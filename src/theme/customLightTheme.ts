import { createTheme, ThemeOptions } from '@mui/material';

export const customLightTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      light: '#d8b4fe', // 300
      main: '#a855f7', // purple 500
      dark: '#7e22ce', // 700
    },
    background: {
      paper: '#fde68a', // Amber 500
      default: '#fef3c7', // Amber 200
    },
  },
});
