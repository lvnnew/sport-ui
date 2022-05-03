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
  <Route element={Dashboard} key='dashboard' path='/dashboard' />,
  <Route element={Functions} key='functions' path='/functions' />,
  <Route element={ResourcesPage} key='resources' path='/resources' />,
  <Route element={MetaPage} key='meta' path='/meta' />,
  ...additionalRoutes,
];

