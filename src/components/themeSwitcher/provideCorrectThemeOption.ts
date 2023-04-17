import { ThemeOptions } from '@mui/material';
import {
  ThemeMode,
  Mode,
} from './interfaces/IThemeSwitcher';
import { customDarkTheme } from '../../theme/customDarkTheme';
import { customLightTheme } from '../../theme/customLightTheme';

export const provideCorrectThemeOptions = (
  mode: ThemeMode,
): ThemeOptions => {
  switch (mode) {
    case Mode.light:
      return customLightTheme;
    case Mode.dark:
      return customDarkTheme;
  }
};
