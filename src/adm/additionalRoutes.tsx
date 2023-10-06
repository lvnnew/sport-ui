import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import Loadable from '../shared/Loadable';

const LoadableDashboardStats = Loadable(() => import('./DashboardStats'));
const LoadableFilePage = Loadable(() => import('./pages/file/FilePage'));

const additionalRoutes = [
  <Route element={<LoadableDashboardStats />} key='statsDashboard' path='/statsDashboard' />,
  <Route element={<LoadableFilePage />} key='files' path='/ref-file-saving' />,
];

export default additionalRoutes;
