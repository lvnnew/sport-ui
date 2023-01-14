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
  BooleanField,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AutogenerationRuleFilter from './AutogenerationRuleFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'autogenerationRules.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAutogenerationRuleList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.autogenerationRules.title.plural'
      exporter={false}
      filters={<AutogenerationRuleFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.autogenerationRules.fields.id' />
        <TextField source='title' label='catalogs.autogenerationRules.fields.title' />
        <DateField source='version' label='catalogs.autogenerationRules.fields.version' />
        <TextField source='originalEntityType' label='catalogs.autogenerationRules.fields.originalEntityType' />
        <TextField source='generatingEntityType' label='catalogs.autogenerationRules.fields.generatingEntityType' />
        <TextField source='originalEntityFilter' label='catalogs.autogenerationRules.fields.originalEntityFilter' />
        <TextField source='generatingEntityConstructionRules' label='catalogs.autogenerationRules.fields.generatingEntityConstructionRules' />
        <BooleanField source='ignoreVersionOnHistory' label='catalogs.autogenerationRules.fields.ignoreVersionOnHistory' />
      </Datagrid>
    </List>
  );
};

export default DefaultAutogenerationRuleList;
