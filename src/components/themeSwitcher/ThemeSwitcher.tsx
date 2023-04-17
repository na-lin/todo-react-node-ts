import React, { FC, ReactElement } from 'react';

// MUI
import { FormControlLabel, Switch } from '@mui/material';

const ThemeSwitcher: FC = (): ReactElement => {
  return (
    <>
      <FormControlLabel
        label="switch to dark mode"
        control={<Switch color="success" />}
      />
    </>
  );
};

export default ThemeSwitcher;
