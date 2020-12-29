import React from 'react';

import { Container } from './styles';

const ClinicsCards: React.FC = () => {
  return (
    <Container>
      <div>CLÍNICA</div>
      <div className="card-content">
        <div className="content-left">
          <h1>NOME CLINICA</h1>
          <div>
            <p>CEP Clínica</p>
            <p>Email Clínica</p>
          </div>
        </div>
        <div className="content-right">
          <div className="clinic-services">
            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="clinic-whatsapp">
            <p>Whatsapp icon</p>
            <h3>Phone Number</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClinicsCards;
