import React, { FC, ReactElement } from 'react';

// MUI
import { TextField } from '@mui/material';

// type safety
import { ITextField } from './ITextField';
import PropTypes from 'prop-types';
const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  // destructure props
  const {
    disabled = false,
    onChange = (e) => console.log(e),
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TaskDescriptionField;

TaskDescriptionField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
