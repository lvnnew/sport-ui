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
} from 'react-admin';
import TagFilter from './TagFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'tags.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTagList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.tags.title.plural'
      filters={<TagFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.tags.fields.id' />
        <TextField source='comment' label='catalogs.tags.fields.comment' />
      </Datagrid>
    </List>
  );
};

export default DefaultTagList;
