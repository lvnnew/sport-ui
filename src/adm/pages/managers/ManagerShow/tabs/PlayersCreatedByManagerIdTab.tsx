/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const PlayersCreatedByManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='players'
      target='createdByManagerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.players.fields.id' />
        <TextField source='firstname' label='catalogs.players.fields.firstname' />
        <TextField source='lastname' label='catalogs.players.fields.lastname' />
        <TextField source='patronymic' label='catalogs.players.fields.patronymic' />
        <TextField source='title' label='catalogs.players.fields.title' />
        <TextField source='playerName' label='catalogs.players.fields.playerName' />
        <NumberField source='number' label='catalogs.players.fields.number' />
        <DateField source='dateOfBirth' label='catalogs.players.fields.dateOfBirth' />
        <NumberField source='age' label='catalogs.players.fields.age' />
        <ReferenceField source='teamId' label='catalogs.players.fields.teamId' reference='teams' link='show' />
        <ReferenceField source='createdByManagerId' label='catalogs.players.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.players.fields.lastChangedByManagerId' reference='managers' link='show' />
        <ReferenceField source='parentId' label='catalogs.players.fields.parentId' reference='parents' link='show' />
        <TextField source='linkToProfile' label='catalogs.players.fields.linkToProfile' />
        <NumberField source='playerRating' label='catalogs.players.fields.playerRating' />
        <ReferenceField source='photoId' label='catalogs.players.fields.photoId' reference='files' link='show' />
        <NumberField source='playerRatingAverage' label='catalogs.players.fields.playerRatingAverage' />
        <NumberField source='commonPlayerRatingGoalkeeper' label='catalogs.players.fields.commonPlayerRatingGoalkeeper' />
        <NumberField source='commonPlayerRatingAttack' label='catalogs.players.fields.commonPlayerRatingAttack' />
        <NumberField source='commonPlayerRatingMidfielder' label='catalogs.players.fields.commonPlayerRatingMidfielder' />
        <NumberField source='commonPlayerRatingDefender' label='catalogs.players.fields.commonPlayerRatingDefender' />
        <NumberField source='playedMatches' label='catalogs.players.fields.playedMatches' />
        <NumberField source='averagePlayerRatingGoalkeeper' label='catalogs.players.fields.averagePlayerRatingGoalkeeper' />
        <NumberField source='averagePlayerRatingAttack' label='catalogs.players.fields.averagePlayerRatingAttack' />
        <NumberField source='averagePlayerRatingMidfielder' label='catalogs.players.fields.averagePlayerRatingMidfielder' />
        <NumberField source='averagePlayerRatingDefender' label='catalogs.players.fields.averagePlayerRatingDefender' />
        <ReferenceField source='playerAggregatedRoleId' label='catalogs.players.fields.playerAggregatedRoleId' reference='playerAggregatedRoles' link='show' />
        <TextField source='playerTag' label='catalogs.players.fields.playerTag' />
        <NumberField source='progressivePassAccuracy' label='catalogs.players.fields.progressivePassAccuracy' />
        <ReferenceField source='playerRankId' label='catalogs.players.fields.playerRankId' reference='playerRanks' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default PlayersCreatedByManagerIdTab;
