import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import Loadable from '../shared/Loadable';
import additionalRoutes from './additionalRoutes';

// DO NOT EDIT! THIS IS GENERATED FILE

const LoadableDashboard = Loadable(() => import('./Dashboard'));
const LoadableFunctions = Loadable(() => import('./functions/Functions'));
const LoadableResourcesPage = Loadable(() => import('./ResourcesPage'));
const LoadableMetaPage = Loadable(() => import('./MetaPage'));
const LoadableDebugPage = Loadable(() => import('./utility/DebugPage'));

export const routes = [
  <Route element={<LoadableDashboard />} key='dashboard' path='/dashboard' />,
  <Route element={<LoadableFunctions />} key='functions' path='/functions' />,
  <Route element={<LoadableResourcesPage />} key='resources' path='/resources' />,
  <Route element={<LoadableMetaPage />} key='meta' path='/meta' />,
  <Route element={<LoadableDebugPage />} key='debug' path='/debug' />,
  ...additionalRoutes,
];
