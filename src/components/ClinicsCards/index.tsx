import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Container } from './styles';

const ClinicsCards: React.FC = () => {
  return (
    <Container>
      <div className="card-tag">
        <h3>CLÍNICA</h3>
      </div>
      <div className="card-content">
        <div className="content-left">
          <h1>ESH SOLUÇÕES INTELIGENTES</h1>
          <div>
            <p>04602-002</p>
            <p>contato@ehsss.com.br</p>
          </div>
        </div>
        <div className="content-right">
          <div className="clinic-services">
            <ul>
              <li>Exames Clínicos</li>
              <li>Ex. Complementares</li>
              <li>PPRA</li>
              <li>PCMSO</li>
            </ul>
          </div>
          <div className="clinic-whatsapp">
            <div>
              <FaWhatsapp size={15} color="#fff" />
              <p>WhatsApp</p>
            </div>
            <h3>(11) 93477-9755</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClinicsCards;
