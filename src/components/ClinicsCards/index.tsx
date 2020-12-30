import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ClinicsServices from '../ClinicsServices';

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
      }
      if (service === 'Exames Complementares') {
        setComplementar(true);
      }
      if (service === 'PPRA') {
        setPpra(true);
      }
      if (service === 'PCMSO') {
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
              <ClinicsServices exames={exames}>Exames Clínicos</ClinicsServices>
              <ClinicsServices complementar={complementar}>
                Ex. Complementares
              </ClinicsServices>
              <ClinicsServices ppra={ppra}>PPRA</ClinicsServices>
              <ClinicsServices pcmso={pcmso}>PCMSO</ClinicsServices>
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
