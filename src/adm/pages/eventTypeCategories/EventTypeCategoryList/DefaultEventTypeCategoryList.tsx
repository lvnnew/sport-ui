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
import EventTypeCategoryFilter from './EventTypeCategoryFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'eventTypeCategories.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultEventTypeCategoryList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.eventTypeCategories.title.plural'
      filters={<EventTypeCategoryFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.eventTypeCategories.fields.id' />
        <TextField source='title' label='catalogs.eventTypeCategories.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultEventTypeCategoryList;
