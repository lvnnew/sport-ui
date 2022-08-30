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
  useTranslate,
} from 'react-admin';
import TemplateStyleFilter from './TemplateStyleFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'templateStyles.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTemplateStyleList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.templateStyles.title')}
      exporter={false}
      filters={<TemplateStyleFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.templateStyles.fields.id')} />
        <TextField source='title' label={translate('catalogs.templateStyles.fields.title')} />
        <TextField source='style' label={translate('catalogs.templateStyles.fields.style')} />
      </Datagrid>
    </List>
  );
};

export default DefaultTemplateStyleList;
