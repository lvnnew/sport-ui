import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultEventTypeCategoryList from './DefaultEventTypeCategoryList';

const EventTypeCategoryList: FC<ListProps> = (props: ListProps) => (
  <DefaultEventTypeCategoryList {...props} />
);

export default EventTypeCategoryList;
