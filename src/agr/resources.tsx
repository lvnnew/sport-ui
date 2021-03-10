/* eslint-disable max-len */
import * as React from 'react';
import {
  Resource,
} from 'react-admin';

import TagShow from './pages/tags/TagShow';
import TagEdit from './pages/tags/TagEdit';
import TagCreate from './pages/tags/TagCreate';
import TagList from './pages/tags/TagList';

// DO NOT EDIT! THIS IS GENERATED FILE

export const agrResources = [
  <Resource show={TagShow} edit={TagEdit} create={TagCreate} key='tags' list={TagList} name='tags' />,
];
