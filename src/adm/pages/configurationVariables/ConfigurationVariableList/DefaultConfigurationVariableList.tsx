/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import ConfigurationVariableFilter from './ConfigurationVariableFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'configurationVariables.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultConfigurationVariableList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.configurationVariables.title.plural'
      filters={<ConfigurationVariableFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.configurationVariables.fields.id' />
      </Datagrid>
    </List>
  );
};

export default DefaultConfigurationVariableList;
