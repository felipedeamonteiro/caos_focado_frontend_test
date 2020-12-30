import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddClinicsForm from '../pages/AddClinicsForm';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/adicionar_clinica" component={AddClinicsForm} />
  </Switch>
);

export default Routes;
