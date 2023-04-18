export enum Mode {
  light = 'light',
  dark = 'dark',
}

export type ThemeMode = Mode.light | Mode.dark;

export interface IThemeSwitcher {
  mode?: ThemeMode;
  onSwitchTheme?: (mode: ThemeMode) => void;
}
