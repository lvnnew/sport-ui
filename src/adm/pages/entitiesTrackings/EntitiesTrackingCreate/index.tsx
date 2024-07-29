import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultEntitiesTrackingCreate from './DefaultEntitiesTrackingCreate';

const EntitiesTrackingCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultEntitiesTrackingCreate {...props} />
);

export default EntitiesTrackingCreate;
