import React, { FC, ReactElement } from 'react';

// Pages
import Dashboard from './pages/dashboard/Dashboard';

// MUI
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customLightTheme } from './theme/customLightTheme';
import { customDarkTheme } from './theme/customDarkTheme';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customLightTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
