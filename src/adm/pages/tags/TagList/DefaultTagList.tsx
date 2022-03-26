/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  useTranslate,
} from 'react-admin';
import TagFilter from './TagFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTagList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.tags.title')} exporter={false} filters={<TagFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' />
        <TextField source='comment' />
      </Datagrid>
    </List>
  );
};

export default DefaultTagList;
