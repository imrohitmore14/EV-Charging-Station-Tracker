import React from 'react';  // Import React
import NavigationBar from "./NavigationBar";
import Button from 'react-bootstrap/Button';

export function LoginDashboard() {
  return (
    <div>
      <NavigationBar/>
      <Button variant="light">User Login</Button>{' '}
      <Button variant="light">Charging Station Login</Button>{' '}
      <Button variant="light">Admin Login</Button>{' '}
    </div>
  );
}