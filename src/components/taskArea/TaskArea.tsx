import React, { FC, ReactElement } from 'react';

// MUI
import { Grid } from '@mui/material';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <h2>Content area</h2>
    </Grid>
  );
};

export default TaskArea;
