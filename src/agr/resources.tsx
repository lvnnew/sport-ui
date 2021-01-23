/* eslint-disable max-len */
import * as React from 'react';
import {
  Resource,
} from 'react-admin';

import AgrTagShow from './pages/agrTags/AgrTagShow';
import AgrTagEdit from './pages/agrTags/AgrTagEdit';
import AgrTagCreate from './pages/agrTags/AgrTagCreate';
import AgrTagList from './pages/agrTags/AgrTagList';

export const agrResources = [
  <Resource show={AgrTagShow} edit={AgrTagEdit} create={AgrTagCreate} key='agrTags' list={AgrTagList} name='agrTags' />,
];
