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

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagersToPermissionsManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='managersToPermissions'
      target='managerId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' label={translate('catalogs.managersToPermissions.fields.id')} />
        <ReferenceField source='managerId' label={translate('catalogs.managersToPermissions.fields.managerId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='permissionId' label={translate('catalogs.managersToPermissions.fields.permissionId')} reference='permissions' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ManagersToPermissionsManagerIdTab;
