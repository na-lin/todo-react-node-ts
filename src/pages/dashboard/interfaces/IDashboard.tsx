import { ThemeMode } from '../../../components/themeSwitcher/interfaces/IThemeSwitcher';

export interface IDashboard {
  onSwitchTheme?: (mode: ThemeMode) => void;
}
