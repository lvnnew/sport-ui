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
import LanguageFilter from './LanguageFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'languages.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultLanguageList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.languages.title')}
      exporter={false}
      filters={<LanguageFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.languages.fields.id')} />
        <TextField source='title' label={translate('catalogs.languages.fields.title')} />
      </Datagrid>
    </List>
  );
};

export default DefaultLanguageList;
