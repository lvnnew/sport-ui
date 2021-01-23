/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Datagrid,
  Edit,
  EditProps,
  EditButton,
  FieldProps,
  NumberField,
  ReferenceManyField,
  SimpleForm,
  TextInput,
  useTranslate,
} from 'react-admin';

import ThumbnailField from '../products/ThumbnailField';
import ProductRefField from '../products/ProductRefField';
import {
  Category,
} from '../../types';

const CategoryTitle: FC<FieldProps<Category>> = ({record}) => {
  const translate = useTranslate();

  return record ? (
    <span>
      {translate('resources.categories.name', {smart_count: 1})} &quot;
      {record.name}&quot;
    </span>
  ) : null;
};

const CategoryEdit: FC<EditProps> = props => (
  <Edit title={<CategoryTitle />} {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <ReferenceManyField
        fullWidth
        label='resources.categories.fields.products'
        perPage={20}
        reference='products'
        target='category_id'
      >
        <Datagrid>
          <ThumbnailField />
          <ProductRefField source='reference' />
          <NumberField
            options={{currency: 'USD', style: 'currency'}}
            source='price'
          />
          <NumberField
            options={{minimumFractionDigits: 2}}
            source='width'
          />
          <NumberField
            options={{minimumFractionDigits: 2}}
            source='height'
          />
          <NumberField source='stock' />
          <NumberField source='sales' />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);

export default CategoryEdit;
