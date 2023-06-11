import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

function PatientsPage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Patients Page
        </Typography>
        <Typography variant="body2" component="p">
          This is the Patients page of the Health Management System.
          You can view and manage patient information here.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PatientsPage;
