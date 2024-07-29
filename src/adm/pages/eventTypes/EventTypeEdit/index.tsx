import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultEventTypeEdit from './DefaultEventTypeEdit';

const EventTypeEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultEventTypeEdit {...props} />
);

export default EventTypeEdit;
