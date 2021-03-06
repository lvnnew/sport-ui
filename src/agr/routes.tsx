import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  AgrDashboard,
} from './dashboard';
import Functions from './functions/Functions';
import ResourcesPage from './ResourcesPage';
import MetaPage from './MetaPage';
import {additionalRoutes} from './additionalRoutes';

export const agrRoutes = [
  <Route component={AgrDashboard} exact key='agr' path='/agr/dashboard' />,
  <Route component={Functions} exact key='agrFunctions' path='/agr/functions' />,
  <Route component={ResourcesPage} exact key='agrResources' path='/agrResources' />,
  <Route component={MetaPage} exact key='meta' path='/meta' />,
  ...additionalRoutes,
];

