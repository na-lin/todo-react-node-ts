import React, { FC, ReactElement, useState } from 'react';

// MUI
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// type safety
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';
const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  // destucture props
  const {
    disabled = false,
    value = null,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Task Date"
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
