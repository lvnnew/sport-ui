import * as React from 'react';
import {
  FC,
} from 'react';
import {
  ReferenceField, ReferenceFieldProps,
} from 'react-admin';

import FullNameField from './FullNameField';

const CustomerReferenceField: FC<
    Omit<ReferenceFieldProps, 'reference' | 'children' | 'source'> & {
        source?: string;
    }
> = props => (
  <ReferenceField reference='customers' source='customer_id' {...props}>
    <FullNameField />
  </ReferenceField>
);

CustomerReferenceField.defaultProps = {
  addLabel: true,
  source: 'customer_id',
};

export default CustomerReferenceField;
