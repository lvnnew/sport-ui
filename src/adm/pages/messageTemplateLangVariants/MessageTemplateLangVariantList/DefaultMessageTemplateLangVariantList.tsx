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
  ReferenceField,
  useTranslate,
} from 'react-admin';
import MessageTemplateLangVariantFilter from './MessageTemplateLangVariantFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'messageTemplateLangVariants.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMessageTemplateLangVariantList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.messageTemplateLangVariants.title')}
      exporter={false}
      filters={<MessageTemplateLangVariantFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.messageTemplateLangVariants.fields.id')} />
        <TextField source='subjectTemplate' label={translate('catalogs.messageTemplateLangVariants.fields.subjectTemplate')} />
        <TextField source='bodyTemplate' label={translate('catalogs.messageTemplateLangVariants.fields.bodyTemplate')} />
        <ReferenceField source='messageTemplateId' label={translate('catalogs.messageTemplateLangVariants.fields.messageTemplateId')} reference='messageTemplates' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='languageId' label={translate('catalogs.messageTemplateLangVariants.fields.languageId')} reference='languages' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='additionalStyle' label={translate('catalogs.messageTemplateLangVariants.fields.additionalStyle')} />
      </Datagrid>
    </List>
  );
};

export default DefaultMessageTemplateLangVariantList;
