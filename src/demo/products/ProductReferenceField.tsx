import * as React from 'react';
import {
  FC,
} from 'react';
import {
  ReferenceField, ReferenceFieldProps, TextField,
} from 'react-admin';

interface Props {
    source?: string;
}

const ProductReferenceField: FC<
    Props & Omit<Omit<ReferenceFieldProps, 'source'>, 'reference' | 'children'>
> = props => (
  <ReferenceField
    label='Product'
    reference='products'
    source='product_id'
    {...props}
  >
    <TextField source='reference' />
  </ReferenceField>
);

ProductReferenceField.defaultProps = {
  addLabel: true,
  source: 'product_id',
};

export default ProductReferenceField;
