import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';
import ClinicsCards from '../../components/ClinicsCards';
import Button from '../../components/Button';
import { Container } from './styles';

import { dados } from '../../server.json';

interface ClinicsData2 {
  NOME: string;
  CEP: string;
  ENDEREÇO: string;
  EMAIL: string;
  SERVICOS: string;
  WHATSAPP: string;
}

const Dashboard: React.FC = () => {
  const [sortedClinics, setSortedClinics] = useState<ClinicsData2[]>([]);
  const [pressedButton, setPressedButton] = useState<boolean>(false);
  const [unsortedClinics, setUnsortedClinics] = useState(dados);
  const copyOfDados = dados.slice(0);

  const sortClinicsData = useCallback(() => {
    if (pressedButton) {
      setPressedButton(false);
      setUnsortedClinics(dados);
    } else {
      const sortedDados = copyOfDados.sort((a, b) =>
        a.NOME !== b.NOME ? (a.NOME < b.NOME ? -1 : 1) : 0,
      );
      setSortedClinics(sortedDados);
      setPressedButton(true);
    }
  }, [copyOfDados, pressedButton]);

  return (
    <Container>
      <div className="upper-div">
        <Button pressed={pressedButton} onClick={sortClinicsData}>
          {pressedButton ? 'Voltar' : 'Mostrar em ordem alfabética'}
        </Button>

        <p style={{ fontWeight: 'bold', color: '#000' }}>
          Número de clínicas:
          {unsortedClinics ? unsortedClinics.length : sortedClinics.length}
        </p>
        <Link to="/adicionar_clinica">
          <Button>Adicionar Clínica</Button>
        </Link>
      </div>

      {pressedButton &&
        sortedClinics.map((clinica, index) => (
          <ClinicsCards
            key={index}
            name={clinica.NOME}
            zip={clinica.CEP}
            email={clinica.EMAIL}
            services={clinica.SERVICOS.split(', ')}
            whatsapp={clinica.WHATSAPP}
          />
        ))}
      {!pressedButton &&
        unsortedClinics.map((clinica, index) => (
          <ClinicsCards
            key={index}
            name={clinica.NOME}
            zip={clinica.CEP}
            email={clinica.EMAIL}
            services={clinica.SERVICOS.split(', ')}
            whatsapp={clinica.WHATSAPP}
          />
        ))}
    </Container>
  );
};

export default Dashboard;
