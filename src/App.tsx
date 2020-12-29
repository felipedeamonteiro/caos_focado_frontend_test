import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <h1>Hello World</h1>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
