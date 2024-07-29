/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import MatchPeriodMarkupFilter from './MatchPeriodMarkupFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'matchPeriodMarkups.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMatchPeriodMarkupList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.matchPeriodMarkups.title.plural'
      filters={<MatchPeriodMarkupFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.matchPeriodMarkups.fields.id' />
        <NumberField source='timestamp' label='catalogs.matchPeriodMarkups.fields.timestamp' />
        <ReferenceField source='periodTypeId' label='catalogs.matchPeriodMarkups.fields.periodTypeId' reference='periodTypes' link='show' />
        <ReferenceField source='matchVideoId' label='catalogs.matchPeriodMarkups.fields.matchVideoId' reference='matchVideos' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultMatchPeriodMarkupList;
