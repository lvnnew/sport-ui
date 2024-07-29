import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultEventTypeCreate from './DefaultEventTypeCreate';

const EventTypeCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultEventTypeCreate {...props} />
);

export default EventTypeCreate;
