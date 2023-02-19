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
import MailingTypeFilter from './MailingTypeFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'mailingTypes.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMailingTypeList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.mailingTypes.title.plural'
      filters={<MailingTypeFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.mailingTypes.fields.id' />
        <TextField source='title' label='catalogs.mailingTypes.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingTypeList;
