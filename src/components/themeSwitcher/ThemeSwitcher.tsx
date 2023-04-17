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
    onChange = (e) => console.log(e.target.checked),
  } = props;

  return (
    <>
      <FormControlLabel
        label={`switch to ${mode} mode`}
        control={
          <Switch color="success" onChange={onChange} />
        }
      />
    </>
  );
};

export default ThemeSwitcher;
ThemeSwitcher.propTypes = {
  mode: PropTypes.oneOf([Mode.light, Mode.dark]),
  onChange: PropTypes.func,
};
