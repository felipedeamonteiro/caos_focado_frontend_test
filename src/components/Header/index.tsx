import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="main-div">
        {window.location.href.indexOf('adicionar_clinica') === -1 ? (
          <h1>Visualizador de Clínicas</h1>
        ) : (
          <h1>Adicionar Clínica</h1>
        )}
      </div>
    </Container>
  );
};

export default Header;
