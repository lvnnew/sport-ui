/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  NumberField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import StatFilter from './StatFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultStatList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.stats.title')} exporter={false} filters={<StatFilter />} {...props}>
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.stats.fields.id')} />
        <DateField source='updated' label={translate('catalogs.stats.fields.updated')} showTime />
        <NumberField source='helloCount' label={translate('catalogs.stats.fields.helloCount')} />
      </Datagrid>
    </List>
  );
};

export default DefaultStatList;
