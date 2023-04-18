import React, { FC, ReactElement } from 'react';

// MUI
import { Grid } from '@mui/material';

// Components
import Sidebar from '../../components/sidebar/Sidebar';
import TaskArea from '../../components/taskArea/TaskArea';

// type
import { IDashboard } from './interfaces/IDashboard';
import PropTypes from 'prop-types';

const Dashboard: FC<IDashboard> = (props): ReactElement => {
  const { onSwitchTheme = (mode) => console.log(mode) } =
    props;

  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea onSwitchTheme={onSwitchTheme} />
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
Dashboard.propTypes = {
  onSwitchTheme: PropTypes.func,
};
