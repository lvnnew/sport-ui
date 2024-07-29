import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultEventTypeCategoryCreate from './DefaultEventTypeCategoryCreate';

const EventTypeCategoryCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultEventTypeCategoryCreate {...props} />
);

export default EventTypeCategoryCreate;
