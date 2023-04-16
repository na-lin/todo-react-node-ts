import React, { FC, ReactElement } from 'react';

// MUI
import {
  Box,
  FormControlLabel,
  Switch,
  Button,
} from '@mui/material';

const _TaskFooter: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        control={<Switch color="warning" />}
        label="In Progress"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: '#ffffff',
        }}
      >
        Mark Completed
      </Button>
    </Box>
  );
};

export default _TaskFooter;
