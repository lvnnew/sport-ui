/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import UnitFilter from './UnitFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.units.title')} exporter={false} filters={<UnitFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.units.fields.id')} />
        <TextField source='title' label={translate('catalogs.units.fields.title')} />
        <ReferenceField source='parentId' label={translate('catalogs.units.fields.parentId')} reference='units' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultUnitList;
