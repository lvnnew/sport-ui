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
  useTranslate,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagersToRolesManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

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
        <NumberField source='id' label={translate('catalogs.managersToRoles.fields.id')} />
        <ReferenceField source='managerId' label={translate('catalogs.managersToRoles.fields.managerId')} reference='managers' link='show' />
        <ReferenceField source='roleId' label={translate('catalogs.managersToRoles.fields.roleId')} reference='roles' link='show' />
        <DateField source='expiresAt' label={translate('catalogs.managersToRoles.fields.expiresAt')} />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ManagersToRolesManagerIdTab;
