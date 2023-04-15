import React, { FC, ReactElement } from 'react';

// Pages
import Dashboard from './pages/dashboard/Dashboard';

// MUI
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customDarkTheme } from './theme/customTheme';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customDarkTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
