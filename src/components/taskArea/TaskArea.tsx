import React, { FC, ReactElement } from 'react';

// MUI
import { Grid, Box } from '@mui/material';

// Date format
import { format } from 'date-fns';

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
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
        </Grid>

        {/* List of Task Content */}
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <Box>Task Counter</Box>
          <Box>Task will come over here</Box>
          <Box>Task will come over here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
