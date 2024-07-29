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

// DO NOT EDIT! THIS IS GENERATED FILE

const MatchVideosMatchIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='matchVideos'
      target='matchId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.matchVideos.fields.id' />
        <TextField source='videoTitle' label='catalogs.matchVideos.fields.videoTitle' />
        <TextField source='videoLink' label='catalogs.matchVideos.fields.videoLink' />
        <ReferenceField source='matchId' label='catalogs.matchVideos.fields.matchId' reference='matches' link='show' />
        <NumberField source='order' label='catalogs.matchVideos.fields.order' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MatchVideosMatchIdTab;
