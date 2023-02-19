/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AutogenerationHistoryEntryFilter from './AutogenerationHistoryEntryFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'autogenerationHistoryEntries.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAutogenerationHistoryEntryList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.autogenerationHistoryEntries.title.plural'
      filters={<AutogenerationHistoryEntryFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.autogenerationHistoryEntries.fields.id' />
        <DateField source='date' label='catalogs.autogenerationHistoryEntries.fields.date' showTime />
        <TextField source='originalEntityType' label='catalogs.autogenerationHistoryEntries.fields.originalEntityType' />
        <TextField source='originalEntityId' label='catalogs.autogenerationHistoryEntries.fields.originalEntityId' />
        <ReferenceField source='autogenerationRuleId' label='catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId' reference='autogenerationRules' link='show' />
        <DateField source='version' label='catalogs.autogenerationHistoryEntries.fields.version' />
        <BooleanField source='errorOccurred' label='catalogs.autogenerationHistoryEntries.fields.errorOccurred' />
        <TextField source='error' label='catalogs.autogenerationHistoryEntries.fields.error' />
      </Datagrid>
    </List>
  );
};

export default DefaultAutogenerationHistoryEntryList;
