/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  TextField,
  NumberField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const EventTypesEventTypeCategoryIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='eventTypes'
      target='eventTypeCategoryId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <TextField source='id' label='catalogs.eventTypes.fields.id' />
        <TextField source='title' label='catalogs.eventTypes.fields.title' />
        <NumberField source='points' label='catalogs.eventTypes.fields.points' />
        <ReferenceField source='eventTypeCategoryId' label='catalogs.eventTypes.fields.eventTypeCategoryId' reference='eventTypeCategories' link='show' />
        <NumberField source='order' label='catalogs.eventTypes.fields.order' />
        <BooleanField source='showInTranslationMode' label='catalogs.eventTypes.fields.showInTranslationMode' />
        <BooleanField source='needForSecondPlayer' label='catalogs.eventTypes.fields.needForSecondPlayer' />
        <BooleanField source='dependsOnPoint' label='catalogs.eventTypes.fields.dependsOnPoint' />
        <BooleanField source='redCard' label='catalogs.eventTypes.fields.redCard' />
        <BooleanField source='yellowCard' label='catalogs.eventTypes.fields.yellowCard' />
        <BooleanField source='calculateBlock' label='catalogs.eventTypes.fields.calculateBlock' />
        <BooleanField source='calculateTakeaway' label='catalogs.eventTypes.fields.calculateTakeaway' />
        <BooleanField source='calculateSelection' label='catalogs.eventTypes.fields.calculateSelection' />
        <BooleanField source='calculateInterseption' label='catalogs.eventTypes.fields.calculateInterseption' />
        <BooleanField source='calculateGuardian' label='catalogs.eventTypes.fields.calculateGuardian' />
        <BooleanField source='calculatePositionError' label='catalogs.eventTypes.fields.calculatePositionError' />
        <BooleanField source='calculateGrossError' label='catalogs.eventTypes.fields.calculateGrossError' />
        <BooleanField source='calculatePositiveDribling' label='catalogs.eventTypes.fields.calculatePositiveDribling' />
        <BooleanField source='calculateNegativeDribling' label='catalogs.eventTypes.fields.calculateNegativeDribling' />
        <BooleanField source='calculatePositiveSgm' label='catalogs.eventTypes.fields.calculatePositiveSgm' />
        <BooleanField source='calculateNegativeSgm' label='catalogs.eventTypes.fields.calculateNegativeSgm' />
        <BooleanField source='calculatePositiveRgm' label='catalogs.eventTypes.fields.calculatePositiveRgm' />
        <BooleanField source='calculateNegativeRgm' label='catalogs.eventTypes.fields.calculateNegativeRgm' />
        <BooleanField source='calculateLosses' label='catalogs.eventTypes.fields.calculateLosses' />
        <BooleanField source='calculateGegenPressing' label='catalogs.eventTypes.fields.calculateGegenPressing' />
        <BooleanField source='calculatePressing' label='catalogs.eventTypes.fields.calculatePressing' />
        <BooleanField source='calculateSaveBall' label='catalogs.eventTypes.fields.calculateSaveBall' />
        <BooleanField source='calculatePositiveTransfer' label='catalogs.eventTypes.fields.calculatePositiveTransfer' />
        <BooleanField source='calculateNegativeTransfer' label='catalogs.eventTypes.fields.calculateNegativeTransfer' />
        <BooleanField source='calculateHit' label='catalogs.eventTypes.fields.calculateHit' />
        <BooleanField source='calculateHitTarget' label='catalogs.eventTypes.fields.calculateHitTarget' />
        <BooleanField source='calculateCorner' label='catalogs.eventTypes.fields.calculateCorner' />
        <BooleanField source='calculateFoul' label='catalogs.eventTypes.fields.calculateFoul' />
        <BooleanField source='calculateOffside' label='catalogs.eventTypes.fields.calculateOffside' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default EventTypesEventTypeCategoryIdTab;
