/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import EventFilter from './EventFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'events.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultEventList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='documents.events.title.plural'
      filters={<EventFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='documents.events.fields.id' />
        <DateField source='date' label='documents.events.fields.date' showTime />
        <NumberField source='timeSecond' label='documents.events.fields.timeSecond' />
        <TextField source='linkToTimeSecond' label='documents.events.fields.linkToTimeSecond' />
        <BooleanField source='controversialPoint' label='documents.events.fields.controversialPoint' />
        <NumberField source='startControversialPoint' label='documents.events.fields.startControversialPoint' />
        <BooleanField source='highlight' label='documents.events.fields.highlight' />
        <NumberField source='startHighlight' label='documents.events.fields.startHighlight' />
        <NumberField source='order' label='documents.events.fields.order' />
        <ReferenceField source='eventTypeId' label='documents.events.fields.eventTypeId' reference='eventTypes' link='show' />
        <ReferenceField source='videoId' label='documents.events.fields.videoId' reference='matchVideos' link='show' />
        <ReferenceField source='teamForCompetitionId' label='documents.events.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
        <ReferenceField source='mainPlayerId' label='documents.events.fields.mainPlayerId' reference='players' link='show' />
        <ReferenceField source='secondPlayerId' label='documents.events.fields.secondPlayerId' reference='players' link='show' />
        <ReferenceField source='firstPlayerRoleId' label='documents.events.fields.firstPlayerRoleId' reference='playerRoles' link='show' />
        <ReferenceField source='secondPlayerRoleId' label='documents.events.fields.secondPlayerRoleId' reference='playerRoles' link='show' />
        <ReferenceField source='periodTypeId' label='documents.events.fields.periodTypeId' reference='periodTypes' link='show' />
        <ReferenceField source='matchId' label='documents.events.fields.matchId' reference='matches' link='show' />
        <NumberField source='points' label='documents.events.fields.points' />
        <NumberField source='periodNumber' label='documents.events.fields.periodNumber' />
      </Datagrid>
    </List>
  );
};

export default DefaultEventList;
