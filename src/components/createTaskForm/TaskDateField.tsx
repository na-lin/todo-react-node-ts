import React, { FC, ReactElement, useState } from 'react';

// MUI
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// type safety
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';
const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  // destucture props
  const {
    disabled = false,
    value = new Date(),
    onChange = (date) => console.log(date),
  } = props;
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
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
