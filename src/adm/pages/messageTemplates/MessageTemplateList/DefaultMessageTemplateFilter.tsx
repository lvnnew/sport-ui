import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateFilter: FC<any> = (props) => {
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
        label='catalogs.messageTemplates.fields.title'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='secretData'
        label='catalogs.messageTemplates.fields.secretData'
      />
      <ReferenceInput
        source='messageTypeId'
        reference='messageTypes'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.messageTemplates.fields.messageTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.messageTemplates.fields.messageTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='dataExample'
        defaultValue={null}
        label='catalogs.messageTemplates.fields.dataExample'
      />
      <ReferenceInput
        source='templateStyleId'
        reference='templateStyles'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.messageTemplates.fields.templateStyleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.messageTemplates.fields.templateStyleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultMessageTemplateFilter;
