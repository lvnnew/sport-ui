import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  AgrDashboard,
} from './dashboard';
import Functions from './functions/Functions';
import SmResources from './ResourcesPage';

export const agrRoutes = [
  <Route component={AgrDashboard} exact key='agr' path='/agr/dashboard' />,
  <Route component={Functions} exact key='agrFunctions' path='/agr/functions' />,
  <Route component={SmResources} exact key='agrResources' path='/agrResources' />,
];

