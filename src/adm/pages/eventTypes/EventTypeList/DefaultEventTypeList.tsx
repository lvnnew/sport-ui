/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  NumberField,
  ReferenceField,
  BooleanField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import EventTypeFilter from './EventTypeFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'eventTypes.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultEventTypeList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.eventTypes.title.plural'
      filters={<EventTypeFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='title' label='catalogs.eventTypes.fields.title' />
        <NumberField source='points' label='catalogs.eventTypes.fields.points' />
        <ReferenceField source='eventTypeCategoryId' label='catalogs.eventTypes.fields.eventTypeCategoryId' reference='eventTypeCategories' link='show' />
        <NumberField source='order' label='catalogs.eventTypes.fields.order' />
        <BooleanField source='showInTranslationMode' label='catalogs.eventTypes.fields.showInTranslationMode' />
      </Datagrid>
    </List>
  );
};

export default DefaultEventTypeList;
