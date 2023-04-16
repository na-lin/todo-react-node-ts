import React, { FC, ReactElement } from 'react';

// MUI
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
const TaskSelectField: FC = (): ReactElement => {
  return (
    <FormControl fullWidth>
      <InputLabel id="status">Status</InputLabel>
      <Select
        labelId="status"
        id="status-select"
        value=""
        label="Status"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;
