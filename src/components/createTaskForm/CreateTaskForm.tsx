import React, { FC, ReactElement } from 'react';

// MUI
import { Box, Typography, Stack } from '@mui/material';

// sub-components
import TaskTitleField from './TaskTitleField';
import TaskDescriptionField from './TaskDescriptionField';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';

// types
import { Priority } from './enums/priority';
import { Status } from './enums/status';

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
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              {
                value: Status.todo,
                lable: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                lable: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              {
                value: Priority.high,
                lable: Priority.high.toUpperCase(),
              },
              {
                value: Priority.normal,
                lable: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.low,
                lable: Priority.low.toUpperCase(),
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
