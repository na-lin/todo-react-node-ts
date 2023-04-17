import React, { FC, ReactElement } from 'react';

// MUI
import { FormControlLabel, Switch } from '@mui/material';

// type
import { IThemeSwitcher } from './interfaces/IThemeSwitcher';
import PropTypes from 'prop-types';

const ThemeSwitcher: FC<IThemeSwitcher> = (
  props,
): ReactElement => {
  // destructure props
  const {
    mode = 'light',
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
  mode: PropTypes.string,
  onChange: PropTypes.func,
};
