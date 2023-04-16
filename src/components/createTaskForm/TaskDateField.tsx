import React, { FC, ReactElement, useState } from 'react';

// MUI
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TaskDateField: FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Task Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;
