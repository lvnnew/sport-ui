import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import Loadable from '../shared/Loadable';

const LoadableDashboardStats = Loadable({
  loader: () => import('./DashboardStats'),
});
const LoadableFilePage = Loadable({
  loader: () => import('./pages/file/FilePage'),
});

export const additionalRoutes = [
  <Route component={LoadableDashboardStats} exact key='statsDashboard' path='/statsDashboard' />,
  <Route component={LoadableFilePage} exact key='files' path='/ref-file-saving' />,
];
