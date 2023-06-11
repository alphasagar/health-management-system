import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

function AppointmentsPage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Appointments Page
        </Typography>
        <Typography variant="body2" component="p">
          This is the Appointments page of the Health Management System.
          You can view and manage appointment information here.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AppointmentsPage;
