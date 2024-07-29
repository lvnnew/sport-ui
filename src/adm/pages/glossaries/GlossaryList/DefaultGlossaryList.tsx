/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import GlossaryFilter from './GlossaryFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'glossaries.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultGlossaryList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.glossaries.title.plural'
      filters={<GlossaryFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.glossaries.fields.id' />
        <TextField source='title' label='catalogs.glossaries.fields.title' />
        <TextField source='description' label='catalogs.glossaries.fields.description' />
        <ReferenceField source='periodTypeId' label='catalogs.glossaries.fields.periodTypeId' reference='periodTypes' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultGlossaryList;
