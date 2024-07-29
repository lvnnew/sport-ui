/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const MatchesFirstTeamIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='matches'
      target='firstTeamId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.matches.fields.id' />
        <ReferenceField source='createdByManagerId' label='catalogs.matches.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.matches.fields.lastChangedByManagerId' reference='managers' link='show' />
        <TextField source='title' label='catalogs.matches.fields.title' />
        <ReferenceField source='competitionId' label='catalogs.matches.fields.competitionId' reference='competitions' link='show' />
        <ReferenceField source='firstTeamId' label='catalogs.matches.fields.firstTeamId' reference='teamForCompetitions' link='show' />
        <TextField source='firstTeamColor' label='catalogs.matches.fields.firstTeamColor' />
        <ReferenceField source='firstTeamOnFieldId' label='catalogs.matches.fields.firstTeamOnFieldId' reference='teamForCompetitions' link='show' />
        <ReferenceField source='secondTeamId' label='catalogs.matches.fields.secondTeamId' reference='teamForCompetitions' link='show' />
        <TextField source='secondTeamColor' label='catalogs.matches.fields.secondTeamColor' />
        <DateField source='matchDate' label='catalogs.matches.fields.matchDate' />
        <TextField source='matchTime' label='catalogs.matches.fields.matchTime' />
        <NumberField source='duration' label='catalogs.matches.fields.duration' />
        <TextField source='place' label='catalogs.matches.fields.place' />
        <BooleanField source='active' label='catalogs.matches.fields.active' />
        <NumberField source='firstTeamPoints' label='catalogs.matches.fields.firstTeamPoints' />
        <NumberField source='secondTeamPoints' label='catalogs.matches.fields.secondTeamPoints' />
        <NumberField source='redCardFirstTeam' label='catalogs.matches.fields.redCardFirstTeam' />
        <NumberField source='redCardSecondTeam' label='catalogs.matches.fields.redCardSecondTeam' />
        <NumberField source='yellowCardFirstTeam' label='catalogs.matches.fields.yellowCardFirstTeam' />
        <NumberField source='yellowCardSecondTeam' label='catalogs.matches.fields.yellowCardSecondTeam' />
        <NumberField source='firstTeamHandleTime' label='catalogs.matches.fields.firstTeamHandleTime' />
        <NumberField source='secondTeamHandleTime' label='catalogs.matches.fields.secondTeamHandleTime' />
        <TextField source='linkToProtocol' label='catalogs.matches.fields.linkToProtocol' />
        <ReferenceField source='matchStatusId' label='catalogs.matches.fields.matchStatusId' reference='matchStatuses' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MatchesFirstTeamIdTab;
