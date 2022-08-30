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
  useTranslate,
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
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.autogenerationRules.title')}
      exporter={false}
      filters={<AutogenerationRuleFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.autogenerationRules.fields.id')} />
        <TextField source='title' label={translate('catalogs.autogenerationRules.fields.title')} />
        <DateField source='version' label={translate('catalogs.autogenerationRules.fields.version')} />
        <TextField source='originalEntityType' label={translate('catalogs.autogenerationRules.fields.originalEntityType')} />
        <TextField source='generatingEntityType' label={translate('catalogs.autogenerationRules.fields.generatingEntityType')} />
        <TextField source='originalEntityFilter' label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')} />
        <TextField source='generatingEntityConstructionRules' label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')} />
        <BooleanField source='ignoreVersionOnHistory' label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAutogenerationRuleList;
