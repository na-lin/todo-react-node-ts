import React, { FC, ReactElement } from 'react';

// MUI
import { Box, Typography, Stack } from '@mui/material';

// sub-components
import TaskTitleField from './TaskTitleField';
import TaskDescriptionField from './TaskDescriptionField';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';

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
      <Stack
        sx={{ width: '100%' }}
        direction="column"
        spacing={2}
      >
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack
          sx={{ width: '100%' }}
          direction="row"
          spacing={2}
        >
          <TaskSelectField />
          <TaskSelectField />
        </Stack>
        {/* Task Status  */}
        {/* Task Priority  */}
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
