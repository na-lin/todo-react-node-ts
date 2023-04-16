import React, { FC, ReactElement } from 'react';

// MUI
import { Box, Typography } from '@mui/material';

// types
import { ITaskBody } from './interfaces/ITaskBody';
import PropTypes from 'prop-types';

const _TaskBody: FC<ITaskBody> = (props): ReactElement => {
  const {
    description = 'This is the description of task.',
  } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default _TaskBody;

_TaskBody.propTypes = {
  description: PropTypes.string,
};
