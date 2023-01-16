import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingMessageFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.mailingMessages.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='mailingCampaignId'
        reference='mailingCampaigns'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.mailingMessages.fields.mailingCampaignId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.mailingMessages.fields.mailingCampaignId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='templateId'
        reference='messageTemplates'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.mailingMessages.fields.templateId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.mailingMessages.fields.templateId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='languageId'
        reference='languages'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.mailingMessages.fields.languageId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.mailingMessages.fields.languageId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='to'
        label='catalogs.mailingMessages.fields.to'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='locals'
        label='catalogs.mailingMessages.fields.locals'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='localsHash'
        label='catalogs.mailingMessages.fields.localsHash'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='priority'
        label='catalogs.mailingMessages.fields.priority'
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='dateCreated'
        label='catalogs.mailingMessages.fields.dateCreated'
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='dateSent'
        defaultValue={null}
        label='catalogs.mailingMessages.fields.dateSent'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='error'
        defaultValue={null}
        label='catalogs.mailingMessages.fields.error'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='html'
        defaultValue={null}
        label='catalogs.mailingMessages.fields.html'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='text'
        defaultValue={null}
        label='catalogs.mailingMessages.fields.text'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='uniqueKey'
        defaultValue={null}
        label='catalogs.mailingMessages.fields.uniqueKey'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='subject'
        defaultValue={null}
        label='catalogs.mailingMessages.fields.subject'
      />
      <ReferenceInput
        source='mailingMessageStatusId'
        reference='mailingMessageStatuses'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.mailingMessages.fields.mailingMessageStatusId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.mailingMessages.fields.mailingMessageStatusId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='messageTemplateLangVariantId'
        reference='messageTemplateLangVariants'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.mailingMessages.fields.messageTemplateLangVariantId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.mailingMessages.fields.messageTemplateLangVariantId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultMailingMessageFilter;
