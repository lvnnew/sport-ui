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
import MatchVideoFilter from './MatchVideoFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'matchVideos.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMatchVideoList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.matchVideos.title.plural'
      filters={<MatchVideoFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.matchVideos.fields.id' />
        <TextField source='videoTitle' label='catalogs.matchVideos.fields.videoTitle' />
        <TextField source='videoLink' label='catalogs.matchVideos.fields.videoLink' />
        <ReferenceField source='matchId' label='catalogs.matchVideos.fields.matchId' reference='matches' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultMatchVideoList;
