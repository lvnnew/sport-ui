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
import MailingTypeFilter from './MailingTypeFilter';
import {hasPermission} from '../../../../utils/permissions';

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
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.mailingTypes.title.plural')}
      exporter={false}
      filters={<MailingTypeFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.mailingTypes.fields.id')} />
        <TextField source='title' label={translate('catalogs.mailingTypes.fields.title')} />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingTypeList;
