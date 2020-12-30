import React from 'react';

import { Container } from './styles';

interface LiProps {
  exames?: boolean;
  complementar?: boolean;
  ppra?: boolean;
  pcmso?: boolean;
}

const ClinicsServices: React.FC<LiProps> = ({
  exames,
  complementar,
  ppra,
  pcmso,
}) => {
  return (
    <Container
      exames={exames}
      complementar={complementar}
      ppra={ppra}
      pcmso={pcmso}
    />
  );
};

export default ClinicsServices;
