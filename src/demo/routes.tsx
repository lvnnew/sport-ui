import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  DemoDashboard,
} from './dashboard/Dashboard';
import Segments from './segments/Segments';

export const demoRoutes = [
  <Route exact key='segments' path='/segments' render={() => <Segments />} />,
  <Route component={DemoDashboard} exact key='demo-dashboar' path='/demo/dashboard' />,
];

