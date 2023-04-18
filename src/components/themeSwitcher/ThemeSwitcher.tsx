import React, { FC, ReactElement } from 'react';

// MUI
import { FormControlLabel, Switch } from '@mui/material';

// type
import {
  IThemeSwitcher,
  Mode,
} from './interfaces/IThemeSwitcher';
import PropTypes from 'prop-types';

const ThemeSwitcher: FC<IThemeSwitcher> = (
  props,
): ReactElement => {
  // destructure props
  const {
    mode = Mode.dark,
    onSwitchTheme = (mode) => console.log(mode),
  } = props;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.checked) {
      // checked -> turn to dark mode
      onSwitchTheme(Mode.dark);
    } else {
      // no checked -> turn to light mode
      onSwitchTheme(Mode.light);
    }
  };

  return (
    <>
      <FormControlLabel
        label={`Dark Mode`}
        control={
          <Switch color="success" onChange={handleChange} />
        }
      />
    </>
  );
};

export default ThemeSwitcher;
ThemeSwitcher.propTypes = {
  mode: PropTypes.oneOf([Mode.light, Mode.dark]),
  onSwitchTheme: PropTypes.func,
};
