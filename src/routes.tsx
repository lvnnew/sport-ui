import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import Configuration from './configuration/Configuration';
import {
  agrRoutes,
} from './adm/routes';

// DO NOT EDIT! THIS IS GENERATED FILE

export default [
  <Route exact key='configuration' path='/configuration' render={() => <Configuration />} />,
  ...agrRoutes,
];
