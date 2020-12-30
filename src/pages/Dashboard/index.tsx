import React from 'react';

import ClinicsCards from '../../components/ClinicsCards';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ClinicsCards />
      <ClinicsCards />
      <ClinicsCards />
    </Container>
  );
};

export default Dashboard;
