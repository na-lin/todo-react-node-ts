import React, { FC, ReactElement } from 'react';

// MUI
import { Box, Chip, Typography } from '@mui/material';

// types
import { ITaskHeader } from './interfaces/ITaskHeader';
import PropTypes from 'prop-types';

// helper
import { format } from 'date-fns';

const _TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  // destructure props
  const {
    title = 'This is the title of task',
    date = new Date(),
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      mb={4}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};

export default _TaskHeader;

_TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
