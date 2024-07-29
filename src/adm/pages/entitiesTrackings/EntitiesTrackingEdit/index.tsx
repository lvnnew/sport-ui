import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultEntitiesTrackingEdit from './DefaultEntitiesTrackingEdit';

const EntitiesTrackingEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultEntitiesTrackingEdit {...props} />
);

export default EntitiesTrackingEdit;
