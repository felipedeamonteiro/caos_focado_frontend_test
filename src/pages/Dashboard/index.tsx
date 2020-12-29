import React from 'react';

import ClinicsCards from '../../components/ClinicsCards';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
      <h1>Cards</h1>
      <ClinicsCards />
      <ClinicsCards />
      <ClinicsCards />
    </Container>
  );
};

export default Dashboard;
