import React, { FC, ReactElement } from 'react';

// MUI
import { Box } from '@mui/material';

// sub-components
import _TaskHeader from './_TaskHeader';

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
      {/* Body: task descript */}
      {/* Footer:swith in-progress, mark as completed */}
    </Box>
  );
};

export default Task;
