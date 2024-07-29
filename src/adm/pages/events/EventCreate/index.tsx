import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultEventCreate from './DefaultEventCreate';

const EventCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultEventCreate {...props} />
);

export default EventCreate;
