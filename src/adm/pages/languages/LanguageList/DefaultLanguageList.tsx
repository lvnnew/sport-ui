/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  TextField,
} from 'react-admin';
import LanguageFilter from './LanguageFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'languages.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultLanguageList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.languages.title.plural'
      exporter={false}
      filters={<LanguageFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.languages.fields.id' />
        <TextField source='title' label='catalogs.languages.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultLanguageList;
