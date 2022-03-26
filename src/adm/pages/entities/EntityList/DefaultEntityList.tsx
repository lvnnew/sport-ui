/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  useTranslate,
} from 'react-admin';
import EntityFilter from './EntityFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEntityList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.entities.title')} exporter={false} filters={<EntityFilter />} {...props}>
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.entities.fields.id')} />
        <TextField source='title' label={translate('catalogs.entities.fields.title')} />
      </Datagrid>
    </List>
  );
};

export default DefaultEntityList;
