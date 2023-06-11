import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import img from "../pat.png"

function HomePage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Welcome to the Health Management System
        </Typography>
        <Typography variant="body2" component="p">
          This is the homepage of the Health Management System.
          You can use this system to manage patients and appointments.
        </Typography>
        <img src={img} alt="Image 2" />
      </CardContent>
    </Card>
  );
}

export default HomePage;
