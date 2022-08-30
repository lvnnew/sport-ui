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
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AutogenerationHistoryEntryFilter from './AutogenerationHistoryEntryFilter';
import {hasPermission} from '../../../../utils/permissions';

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
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.autogenerationHistoryEntries.title')}
      exporter={false}
      filters={<AutogenerationHistoryEntryFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.autogenerationHistoryEntries.fields.id')} />
        <DateField source='date' label={translate('catalogs.autogenerationHistoryEntries.fields.date')} showTime />
        <TextField source='originalEntityType' label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityType')} />
        <TextField source='originalEntityId' label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityId')} />
        <ReferenceField source='autogenerationRuleId' label={translate('catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId')} reference='autogenerationRules' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <DateField source='version' label={translate('catalogs.autogenerationHistoryEntries.fields.version')} />
        <BooleanField source='errorOccurred' label={translate('catalogs.autogenerationHistoryEntries.fields.errorOccurred')} />
        <TextField source='error' label={translate('catalogs.autogenerationHistoryEntries.fields.error')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAutogenerationHistoryEntryList;
