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

const MessageTemplateLangVariantsMessageTemplateIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='messageTemplateLangVariants'
      target='messageTemplateId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
      >
        <NumberField source='id' label={translate('catalogs.messageTemplateLangVariants.fields.id')} />
        <TextField source='title' label={translate('catalogs.messageTemplateLangVariants.fields.title')} />
        <TextField source='subjectTemplate' label={translate('catalogs.messageTemplateLangVariants.fields.subjectTemplate')} />
        <TextField source='bodyTemplate' label={translate('catalogs.messageTemplateLangVariants.fields.bodyTemplate')} />
        <ReferenceField source='messageTemplateId' label={translate('catalogs.messageTemplateLangVariants.fields.messageTemplateId')} reference='messageTemplates' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='languageId' label={translate('catalogs.messageTemplateLangVariants.fields.languageId')} reference='languages' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='additionalStyle' label={translate('catalogs.messageTemplateLangVariants.fields.additionalStyle')} />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MessageTemplateLangVariantsMessageTemplateIdTab;
