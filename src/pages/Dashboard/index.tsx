import React from 'react';

import ClinicsCards from '../../components/ClinicsCards';
import { Container } from './styles';

import { dados } from '../../server.json';

const Dashboard: React.FC = () => {
  return (
    <Container>
      {dados.map(clinica => (
        <ClinicsCards
          name={clinica.NOME}
          zip={clinica.CEP}
          email={clinica.EMAIL}
          services={clinica.SERVICOS.split(',')}
          whatsapp={clinica.WHATSAPP}
        />
      ))}
    </Container>
  );
};

export default Dashboard;
