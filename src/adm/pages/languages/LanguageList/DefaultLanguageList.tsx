/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import LanguageFilter from './LanguageFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

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
      filters={<LanguageFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.languages.fields.id' />
        <TextField source='title' label='catalogs.languages.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultLanguageList;
