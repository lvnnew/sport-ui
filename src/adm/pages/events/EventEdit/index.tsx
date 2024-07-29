import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultEventEdit from './DefaultEventEdit';

const EventEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultEventEdit {...props} />
);

export default EventEdit;
