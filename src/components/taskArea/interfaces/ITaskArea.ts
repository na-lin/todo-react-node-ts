import { ThemeMode } from '../../../components/themeSwitcher/interfaces/IThemeSwitcher';

export interface ITaskArea {
  onSwitchTheme?: (mode: ThemeMode) => void;
}
