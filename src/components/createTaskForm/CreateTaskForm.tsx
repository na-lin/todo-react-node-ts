import React, { FC, ReactElement } from 'react';

// MUI
import { Box, Typography } from '@mui/material';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      {/* Task title */}
      {/* Task description */}
      {/* Task date */}
      {/* Task Status  */}
      {/* Task Priority  */}
    </Box>
  );
};

export default CreateTaskForm;
