/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  ReferenceField,
  BooleanField,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import DelegationFilter from './DelegationFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

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
  return (
    <List
      title='catalogs.delegations.title.plural'
      filters={<DelegationFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.delegations.fields.id' />
        <ReferenceField source='fromId' label='catalogs.delegations.fields.fromId' reference='managers' link='show' />
        <ReferenceField source='toId' label='catalogs.delegations.fields.toId' reference='managers' link='show' />
        <DateField source='expiresAt' label='catalogs.delegations.fields.expiresAt' />
        <BooleanField source='active' label='catalogs.delegations.fields.active' />
      </Datagrid>
    </List>
  );
};

export default DefaultDelegationList;
