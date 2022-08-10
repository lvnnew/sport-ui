/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  TextField,
  BooleanField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import MessageTemplateFilter from './MessageTemplateFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'messageTemplates.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMessageTemplateList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.messageTemplates.title')}
      exporter={false}
      filters={<MessageTemplateFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.messageTemplates.fields.id')} />
        <TextField source='title' label={translate('catalogs.messageTemplates.fields.title')} />
        <BooleanField source='secretData' label={translate('catalogs.messageTemplates.fields.secretData')} />
        <ReferenceField source='messageTypeId' label={translate('catalogs.messageTemplates.fields.messageTypeId')} reference='messageTypes' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultMessageTemplateList;
