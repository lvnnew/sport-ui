import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultUnitEdit from './DefaultUnitEdit';

const UnitEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultUnitEdit {...props} />
);

export default UnitEdit;
