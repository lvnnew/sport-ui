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

const additionalRoutes = [
  <Route element={<LoadableDashboardStats />} key='statsDashboard' path='/statsDashboard' />,
  <Route element={<LoadableFilePage />} key='files' path='/ref-file-saving' />,
];

export default additionalRoutes;
