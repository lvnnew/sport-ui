/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import MessageTemplateLangVariantFilter from './MessageTemplateLangVariantFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'messageTemplateLangVariants.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMessageTemplateLangVariantList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.messageTemplateLangVariants.title.plural'
      filters={<MessageTemplateLangVariantFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.messageTemplateLangVariants.fields.id' />
        <TextField source='title' label='catalogs.messageTemplateLangVariants.fields.title' />
        <TextField source='subjectTemplate' label='catalogs.messageTemplateLangVariants.fields.subjectTemplate' />
        <TextField source='bodyTemplate' label='catalogs.messageTemplateLangVariants.fields.bodyTemplate' />
        <ReferenceField source='messageTemplateId' label='catalogs.messageTemplateLangVariants.fields.messageTemplateId' reference='messageTemplates' link='show' />
        <ReferenceField source='languageId' label='catalogs.messageTemplateLangVariants.fields.languageId' reference='languages' link='show' />
        <TextField source='additionalStyle' label='catalogs.messageTemplateLangVariants.fields.additionalStyle' />
      </Datagrid>
    </List>
  );
};

export default DefaultMessageTemplateLangVariantList;
