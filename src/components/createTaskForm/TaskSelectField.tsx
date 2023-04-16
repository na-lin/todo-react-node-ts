import React, { FC, ReactElement } from 'react';

// MUI
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

// type safety
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';
const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  // destructure props
  const {
    disabled = false,
    name = 'selectBox',
    label = 'Select Box',
    value = '',
    onChange = (e) => console.log(e),
    items = [{ value: '', lable: 'Add Items' }],
  } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, idx) => {
          return (
            <MenuItem
              key={idx + item.value}
              value={item.value}
            >
              {item.lable}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;

TaskSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      lable: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
