import React from 'react';  // Import React
import NavigationBar from "./NavigationBar";
import Button from 'react-bootstrap/Button';

export function RegistrationDashboard() {
  return (
    <div>
      <NavigationBar/>
      <Button variant="light">User Registration</Button>{' '}
      <Button variant="light">Charging Station Registration</Button>{' '}
    </div>
  );
}

