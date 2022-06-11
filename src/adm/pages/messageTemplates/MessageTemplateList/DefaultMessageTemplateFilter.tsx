import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.messageTemplates.fields.search')}
        source='q'
        alwaysOn
      />
      <TextInput
        fullWidth
        source='title'
        label={translate('catalogs.messageTemplates.fields.title')}
      />
      <BooleanInput
        fullWidth
        source='secretData'
        label={translate('catalogs.messageTemplates.fields.secretData')}
      />
      <ReferenceInput
        source='messageTypeId'
        reference='messageTypes'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput
          fullWidth
          label={translate('catalogs.messageTemplates.fields.messageTypeId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultMessageTemplateFilter;
