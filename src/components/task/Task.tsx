import React, { FC, ReactElement } from 'react';

// MUI
import { Box } from '@mui/material';

// sub-components
import _TaskHeader from './_TaskHeader';
import _TaskBody from './_TaskBody';
import _TaskFooter from './_TaskFooter';

const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={4}
      p={2}
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
      <_TaskFooter />
      {/* Footer:swith in-progress, mark as completed */}
    </Box>
  );
};

export default Task;
