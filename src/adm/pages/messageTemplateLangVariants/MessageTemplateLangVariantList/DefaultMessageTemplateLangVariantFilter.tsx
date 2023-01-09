import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateLangVariantFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.messageTemplateLangVariants.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label={translate('catalogs.messageTemplateLangVariants.fields.title')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='subjectTemplate'
        required
        label={translate('catalogs.messageTemplateLangVariants.fields.subjectTemplate')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='bodyTemplate'
        required
        label={translate('catalogs.messageTemplateLangVariants.fields.bodyTemplate')}
      />
      <ReferenceInput
        source='messageTemplateId'
        reference='messageTemplates'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.messageTemplateLangVariants.fields.messageTemplateId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.messageTemplateLangVariants.fields.messageTemplateId')}
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput
        source='languageId'
        reference='languages'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.messageTemplateLangVariants.fields.languageId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.messageTemplateLangVariants.fields.languageId')}
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='additionalStyle'
        defaultValue={null}
        label={translate('catalogs.messageTemplateLangVariants.fields.additionalStyle')}
      />
    </Filter>
  );
};

export default DefaultMessageTemplateLangVariantFilter;
