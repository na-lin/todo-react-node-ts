import React from 'react';

export enum Mode {
  light = 'light',
  dark = 'dark',
}

export type ThemeMode = Mode.light | Mode.dark;

export interface IThemeSwitcher {
  mode?: ThemeMode;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}
