import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPeriodTypeEdit from './DefaultPeriodTypeEdit';

const PeriodTypeEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPeriodTypeEdit {...props} />
);

export default PeriodTypeEdit;
