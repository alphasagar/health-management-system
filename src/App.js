import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PatientsPage from './components/PatientsPage';
import AppointmentsPage from './components/AppointmentsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}


export default App;
