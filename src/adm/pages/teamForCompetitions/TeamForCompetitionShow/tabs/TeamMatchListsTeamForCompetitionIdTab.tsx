/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const TeamMatchListsTeamForCompetitionIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='teamMatchLists'
      target='teamForCompetitionId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.teamMatchLists.fields.id' />
        <ReferenceField source='matchId' label='catalogs.teamMatchLists.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='teamForCompetitionId' label='catalogs.teamMatchLists.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default TeamMatchListsTeamForCompetitionIdTab;
