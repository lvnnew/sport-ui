/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import TemplateStyleFilter from './TemplateStyleFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

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
      filters={<TemplateStyleFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.templateStyles.fields.id' />
        <TextField source='title' label='catalogs.templateStyles.fields.title' />
        <TextField source='style' label='catalogs.templateStyles.fields.style' />
      </Datagrid>
    </List>
  );
};

export default DefaultTemplateStyleList;
