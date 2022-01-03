import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import Loadable from '../shared/Loadable';

const LoadableDashboardStats = Loadable({
  loader: () => import('./DashboardStats'),
});

export const additionalRoutes = [
  <Route component={LoadableDashboardStats} exact key='statsDashboard' path='/statsDashboard' />,
];
