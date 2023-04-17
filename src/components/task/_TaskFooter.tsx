import React, { FC, ReactElement } from 'react';

// MUI
import {
  Box,
  FormControlLabel,
  Switch,
  Button,
} from '@mui/material';

// types
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';

const _TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  // destructure props
  const {
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        control={
          <Switch
            color="primary"
            onChange={(e) => onStatusChange(e)}
          />
        }
        label="In Progress"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: '#ffffff',
        }}
        onClick={(e) => onClick(e)}
      >
        Mark Completed
      </Button>
    </Box>
  );
};

export default _TaskFooter;

_TaskFooter.propTypes = {
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
};
