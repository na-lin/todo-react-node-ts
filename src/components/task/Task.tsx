import React, { FC, ReactElement } from 'react';

// MUI
import { Box } from '@mui/material';

// sub-components
import _TaskHeader from './_TaskHeader';
import _TaskBody from './_TaskBody';
import _TaskFooter from './_TaskFooter';

// helper
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';
// types
import { ITask } from './interfaces/ITask';
import PropTypes from 'prop-types';
import { Priority } from '../createTaskForm/enums/priority';
import { Status } from '../createTaskForm/enums/status';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    priority = Priority.high,
    status = Status.completed,
    title = 'Test Title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet',
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

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
        borderColor: `${renderPriorityBorderColor(
          priority,
        )}`,
      }}
    >
      <_TaskHeader title={title} date={date} />
      <_TaskBody description={description} />
      <_TaskFooter
        onStatusChange={onStatusChange}
        onClick={onClick}
      />
    </Box>
  );
};

export default Task;

Task.propTypes = {
  id: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
