import React from 'react';

export interface IThemeSwitcher {
  mode?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}
