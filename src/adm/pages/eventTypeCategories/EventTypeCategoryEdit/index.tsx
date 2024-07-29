import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultEventTypeCategoryEdit from './DefaultEventTypeCategoryEdit';

const EventTypeCategoryEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultEventTypeCategoryEdit {...props} />
);

export default EventTypeCategoryEdit;
