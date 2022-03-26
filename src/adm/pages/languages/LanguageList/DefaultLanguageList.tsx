/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  useTranslate,
} from 'react-admin';
import LanguageFilter from './LanguageFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultLanguageList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.languages.title')} exporter={false} filters={<LanguageFilter />} {...props}>
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.languages.fields.id')} />
        <TextField source='title' label={translate('catalogs.languages.fields.title')} />
      </Datagrid>
    </List>
  );
};

export default DefaultLanguageList;
