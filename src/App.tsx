import React, { FC, ReactElement, useState } from 'react';

// Pages
import Dashboard from './pages/dashboard/Dashboard';

// MUI
import { ThemeProvider, CssBaseline } from '@mui/material';
import {
  ThemeMode,
  Mode,
} from './components/themeSwitcher/interfaces/IThemeSwitcher';
import { provideCorrectThemeOptions } from './components/themeSwitcher/provideCorrectThemeOption';

const App: FC = (): ReactElement => {
  const [mode, setMode] = useState<ThemeMode>(Mode.light);

  const handleSwitchTheme = (mode: ThemeMode): void => {
    switch (mode) {
      case Mode.light:
        setMode(Mode.light);
        break;
      case Mode.dark:
        setMode(Mode.dark);
        break;
    }
  };

  return (
    <ThemeProvider theme={provideCorrectThemeOptions(mode)}>
      <CssBaseline />
      <Dashboard onSwitchTheme={handleSwitchTheme} />
    </ThemeProvider>
  );
};

export default App;
