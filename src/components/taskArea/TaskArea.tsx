import React, { FC, ReactElement } from 'react';

// MUI
import { Grid, Box } from '@mui/material';

// Date format
import { format } from 'date-fns';

// sub-components
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../task/Task';

// types
import { Status } from '../createTaskForm/enums/status';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>

      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        {/* Task Counter */}
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter count={10} status={Status.todo} />
          <TaskCounter
            count={2}
            status={Status.inProgress}
          />
          <TaskCounter
            count={12}
            status={Status.completed}
          />
        </Grid>

        {/* List of Task Content */}
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
