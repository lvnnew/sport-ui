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
import TagFilter from './TagFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'tags.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTagList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.tags.title')}
      exporter={false}
      filters={<TagFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.tags.fields.id')} />
        <TextField source='comment' label={translate('catalogs.tags.fields.comment')} />
      </Datagrid>
    </List>
  );
};

export default DefaultTagList;
