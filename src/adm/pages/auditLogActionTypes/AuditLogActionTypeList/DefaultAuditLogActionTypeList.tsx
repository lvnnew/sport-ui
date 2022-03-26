/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  useTranslate,
} from 'react-admin';
import AuditLogActionTypeFilter from './AuditLogActionTypeFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogActionTypeList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.auditLogActionTypes.title')} exporter={false} filters={<AuditLogActionTypeFilter />} {...props}>
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.auditLogActionTypes.fields.id')} />
        <TextField source='title' label={translate('catalogs.auditLogActionTypes.fields.title')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAuditLogActionTypeList;
