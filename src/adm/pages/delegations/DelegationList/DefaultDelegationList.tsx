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
import DelegationFilter from './DelegationFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'delegations.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultDelegationList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.delegations.title')}
      exporter={false}
      filters={<DelegationFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.delegations.fields.id')} />
        <ReferenceField source='fromId' label={translate('catalogs.delegations.fields.fromId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='toId' label={translate('catalogs.delegations.fields.toId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <DateField source='expiresAt' label={translate('catalogs.delegations.fields.expiresAt')} />
        <BooleanField source='active' label={translate('catalogs.delegations.fields.active')} />
      </Datagrid>
    </List>
  );
};

export default DefaultDelegationList;
