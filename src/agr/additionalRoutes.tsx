import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import DashboardStats from './DashboardStats';

export const additionalRoutes = [
  <Route component={DashboardStats} exact key='statsDashboard' path='/statsDashboard' />,
];
