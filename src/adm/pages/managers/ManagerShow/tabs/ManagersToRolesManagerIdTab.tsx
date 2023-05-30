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
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagersToRolesManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='managersToRoles'
      target='managerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.managersToRoles.fields.id' />
        <ReferenceField source='managerId' label='catalogs.managersToRoles.fields.managerId' reference='managers' link='show' />
        <ReferenceField source='roleId' label='catalogs.managersToRoles.fields.roleId' reference='roles' link='show' />
        <DateField source='expiresAt' label='catalogs.managersToRoles.fields.expiresAt' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ManagersToRolesManagerIdTab;
