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
  useTranslate,
} from 'react-admin';
import MessageTypeFilter from './MessageTypeFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'messageTypes.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMessageTypeList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.messageTypes.title')}
      exporter={false}
      filters={<MessageTypeFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.messageTypes.fields.id')} />
        <TextField source='title' label={translate('catalogs.messageTypes.fields.title')} />
        <TextField source='description' label={translate('catalogs.messageTypes.fields.description')} />
      </Datagrid>
    </List>
  );
};

export default DefaultMessageTypeList;
