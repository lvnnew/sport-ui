import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMatchPeriodMarkupEdit from './DefaultMatchPeriodMarkupEdit';

const MatchPeriodMarkupEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMatchPeriodMarkupEdit {...props} />
);

export default MatchPeriodMarkupEdit;
