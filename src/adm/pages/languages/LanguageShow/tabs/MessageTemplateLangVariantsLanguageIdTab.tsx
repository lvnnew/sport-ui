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
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const MessageTemplateLangVariantsLanguageIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='messageTemplateLangVariants'
      target='languageId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.messageTemplateLangVariants.fields.id' />
        <TextField source='title' label='catalogs.messageTemplateLangVariants.fields.title' />
        <TextField source='subjectTemplate' label='catalogs.messageTemplateLangVariants.fields.subjectTemplate' />
        <TextField source='bodyTemplate' label='catalogs.messageTemplateLangVariants.fields.bodyTemplate' />
        <ReferenceField source='messageTemplateId' label='catalogs.messageTemplateLangVariants.fields.messageTemplateId' reference='messageTemplates' link='show' />
        <ReferenceField source='languageId' label='catalogs.messageTemplateLangVariants.fields.languageId' reference='languages' link='show' />
        <TextField source='additionalStyle' label='catalogs.messageTemplateLangVariants.fields.additionalStyle' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MessageTemplateLangVariantsLanguageIdTab;
