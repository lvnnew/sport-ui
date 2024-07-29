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

const MatchRequestsTeamForCompetitionIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='matchRequests'
      target='teamForCompetitionId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.matchRequests.fields.id' />
        <ReferenceField source='matchId' label='catalogs.matchRequests.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='teamForCompetitionId' label='catalogs.matchRequests.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MatchRequestsTeamForCompetitionIdTab;
