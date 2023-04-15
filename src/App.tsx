import React, { FC, ReactElement } from 'react';

// MUI
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customDarkTheme } from './theme/customTheme';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customDarkTheme}>
      <CssBaseline />
      <h1>Hello world</h1>
    </ThemeProvider>
  );
};

export default App;
