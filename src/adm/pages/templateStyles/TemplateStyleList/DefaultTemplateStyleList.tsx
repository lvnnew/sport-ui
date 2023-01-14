/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  NumberField,
  TextField,
} from 'react-admin';
import TemplateStyleFilter from './TemplateStyleFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'templateStyles.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTemplateStyleList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.templateStyles.title.plural'
      exporter={false}
      filters={<TemplateStyleFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.templateStyles.fields.id' />
        <TextField source='title' label='catalogs.templateStyles.fields.title' />
        <TextField source='style' label='catalogs.templateStyles.fields.style' />
      </Datagrid>
    </List>
  );
};

export default DefaultTemplateStyleList;
