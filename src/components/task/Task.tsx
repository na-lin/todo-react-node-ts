import React, { FC, ReactElement } from 'react';

// MUI
import { Box } from '@mui/material';

// sub-components
import _TaskHeader from './_TaskHeader';
import _TaskBody from './_TaskBody';

const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      <_TaskHeader />
      <_TaskBody />
      {/* Footer:swith in-progress, mark as completed */}
    </Box>
  );
};

export default Task;
