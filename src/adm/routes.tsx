import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import Loadable from '../shared/Loadable';
import Guard from '../raUiLib/Guard';
import additionalRoutes from './additionalRoutes';

// DO NOT EDIT! THIS IS GENERATED FILE

const LoadableDashboard = Loadable(() => import('./Dashboard'));
const LoadableFunctions = Loadable(() => import('./functions/Functions'));
// const LoadableResourcesPage = Loadable(() => import('./ResourcesPage'));
const LoadableMetaPage = Loadable(() => import('./MetaPage'));
const LoadableDebugPage = Loadable(() => import('./utility/DebugPage'));

export const routes = [
  <Route element={<Guard shouldHave='dashboard'><LoadableDashboard /></Guard>} key='dashboard' path='/dashboard' />,
  <Route element={<Guard shouldHave='functions'><LoadableFunctions /></Guard>} key='functions' path='/functions' />,
  // <Route element={<Guard shouldHave='resources'><LoadableResourcesPage /></Guard>} key='resources' path='/resources' />,
  <Route element={<Guard shouldHave='meta'><LoadableMetaPage /></Guard>} key='meta' path='/meta' />,
  <Route element={<Guard shouldHave='debug'><LoadableDebugPage /></Guard>} key='debug' path='/debug' />,

  ...additionalRoutes,
];
