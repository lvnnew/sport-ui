import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateLangVariantFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label='catalogs.messageTemplateLangVariants.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='subjectTemplate'
        label='catalogs.messageTemplateLangVariants.fields.subjectTemplate'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='bodyTemplate'
        label='catalogs.messageTemplateLangVariants.fields.bodyTemplate'
      />
      <ReferenceInput
        source='messageTemplateId'
        reference='messageTemplates'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.messageTemplateLangVariants.fields.messageTemplateId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.messageTemplateLangVariants.fields.messageTemplateId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
          optionText='title'
        />
      </ReferenceInput>
      <ReferenceInput
        source='languageId'
        reference='languages'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.messageTemplateLangVariants.fields.languageId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.messageTemplateLangVariants.fields.languageId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
          optionText='title'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='additionalStyle'
        defaultValue={null}
        label='catalogs.messageTemplateLangVariants.fields.additionalStyle'
      />
    </Filter>
  );
};

export default DefaultMessageTemplateLangVariantFilter;
