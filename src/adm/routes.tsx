import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  Dashboard,
} from './dashboard';
import Functions from './functions/Functions';
import ResourcesPage from './ResourcesPage';
import MetaPage from './MetaPage';
import {additionalRoutes} from './additionalRoutes';

// DO NOT EDIT! THIS IS GENERATED FILE

export const routes = [
  <Route component={Dashboard} exact key='dashboard' path='/agr/dashboard' />,
  <Route component={Functions} exact key='functions' path='/agr/functions' />,
  <Route component={ResourcesPage} exact key='resources' path='/agrResources' />,
  <Route component={MetaPage} exact key='meta' path='/meta' />,
  ...additionalRoutes,
];

