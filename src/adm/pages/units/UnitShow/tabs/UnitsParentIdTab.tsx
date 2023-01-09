/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const UnitsParentIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='units'
      target='parentId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
      >
        <NumberField source='id' label={translate('catalogs.units.fields.id')} />
        <TextField source='title' label={translate('catalogs.units.fields.title')} />
        <ReferenceField source='parentId' label={translate('catalogs.units.fields.parentId')} reference='units' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default UnitsParentIdTab;
