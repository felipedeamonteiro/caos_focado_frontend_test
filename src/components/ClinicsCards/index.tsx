import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Container } from './styles';

interface ClinicsData {
  name: string;
  zip: string;
  email: string;
  services: string[];
  whatsapp: string;
}

const ClinicsCards: React.FC<ClinicsData> = ({
  name,
  zip,
  email,
  services,
  whatsapp,
}) => {
  const [exames, setExames] = useState<boolean>(false);
  const [complementar, setComplementar] = useState<boolean>(false);
  const [ppra, setPpra] = useState<boolean>(false);
  const [pcmso, setPcmso] = useState<boolean>(false);

  useEffect(() => {
    services.forEach(service => {
      if (service === 'Exames Clínicos') {
        setExames(true);
      } else if (service === 'Exames Complementares') {
        setComplementar(true);
      } else if (service === 'PPRA') {
        setPpra(true);
      } else if (service === 'PCMSO') {
        setPcmso(true);
      }
    });
  }, [services]);

  return (
    <Container>
      <div className="card-tag">
        <h3>CLÍNICA</h3>
      </div>
      <div className="card-content">
        <div className="content-left">
          <h1>{name}</h1>
          <div>
            <p>{zip}</p>
            <p>{email}</p>
          </div>
        </div>
        <div className="content-right">
          <div className="clinic-services">
            <ul>
              {exames ? (
                <li className="colored-services">Exames Clínicos</li>
              ) : (
                <li className="noncolored-services">Exames Clínicos</li>
              )}
              {complementar ? (
                <li className="colored-services">Ex. Complementares</li>
              ) : (
                <li className="noncolored-services">Ex. Complementares</li>
              )}
              {ppra ? (
                <li className="colored-services">PPRA</li>
              ) : (
                <li className="noncolored-services">PPRA</li>
              )}
              {pcmso ? (
                <li className="colored-services">PCMSO</li>
              ) : (
                <li className="noncolored-services">PCMSO</li>
              )}
            </ul>
          </div>
          <div className="clinic-whatsapp">
            <div>
              <FaWhatsapp size={15} color="#fff" />
              <p>WhatsApp</p>
            </div>
            <h3>{whatsapp}</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClinicsCards;
